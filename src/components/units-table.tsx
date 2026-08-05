"use client";

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/status-badge";
import { MOCK_UNITS, formatChf } from "@/lib/mock-data";
import { Unit } from "@/lib/types";

type SortKey = "preis-asc" | "preis-desc" | "flaeche-asc" | "flaeche-desc";

const GESCHOSSE = ["Alle", "Erdgeschoss", "Obergeschoss", "Dachgeschoss"];
const ZIMMER = ["Alle", "2.5", "3.5", "4.5"];

export function UnitsTable() {
  const [geschoss, setGeschoss] = useState("Alle");
  const [zimmer, setZimmer] = useState("Alle");
  const [sort, setSort] = useState<SortKey>("preis-asc");

  const units = useMemo(() => {
    let list = MOCK_UNITS.filter((unit) => {
      if (geschoss !== "Alle" && unit.geschoss !== geschoss) return false;
      if (zimmer !== "Alle" && String(unit.zimmer) !== zimmer) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "preis-asc":
          return a.preis - b.preis;
        case "preis-desc":
          return b.preis - a.preis;
        case "flaeche-asc":
          return a.wohnflaeche - b.wohnflaeche;
        case "flaeche-desc":
          return b.wohnflaeche - a.wohnflaeche;
      }
    });

    return list;
  }, [geschoss, zimmer, sort]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <FilterSelect label="Geschoss" value={geschoss} onChange={setGeschoss} options={GESCHOSSE} />
        <FilterSelect label="Zimmer" value={zimmer} onChange={setZimmer} options={ZIMMER} />
        <FilterSelect
          label="Sortieren"
          value={sort}
          onChange={(v) => setSort(v as SortKey)}
          options={[
            { value: "preis-asc", label: "Preis aufsteigend" },
            { value: "preis-desc", label: "Preis absteigend" },
            { value: "flaeche-asc", label: "Fläche aufsteigend" },
            { value: "flaeche-desc", label: "Fläche absteigend" },
          ]}
        />
      </div>

      {/* Desktop: Tabelle */}
      <div className="hidden overflow-x-auto rounded-[var(--radius-base)] border border-border bg-surface md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Wohnung</TableHead>
              <TableHead>Geschoss</TableHead>
              <TableHead>Zimmer</TableHead>
              <TableHead>Wohnfläche</TableHead>
              <TableHead>Sitzplatz/Balkon</TableHead>
              <TableHead>Preis</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Grundriss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <UnitRow key={unit.id} unit={unit} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile: Cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>

      {units.length === 0 && (
        <p className="text-center text-sm text-foreground-muted">
          Keine Wohnungen mit diesen Filtern gefunden.
        </p>
      )}
    </div>
  );
}

function UnitRow({ unit }: { unit: Unit }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{unit.bezeichnung}</TableCell>
      <TableCell>{unit.geschoss}</TableCell>
      <TableCell className="tabular-nums">{unit.zimmer}</TableCell>
      <TableCell className="tabular-nums">{unit.wohnflaeche} m²</TableCell>
      <TableCell className="tabular-nums">{unit.sitzplatzBalkon} m²</TableCell>
      <TableCell className="tabular-nums font-semibold text-primary">{formatChf(unit.preis)}</TableCell>
      <TableCell>
        <StatusBadge status={unit.status} />
      </TableCell>
      <TableCell className="text-right">
        <GrundrissLink unit={unit} />
      </TableCell>
    </TableRow>
  );
}

function UnitCard({ unit }: { unit: Unit }) {
  return (
    <div className="rounded-[var(--radius-base)] border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-heading text-lg text-primary">{unit.bezeichnung}</p>
          <p className="text-sm text-foreground-muted">{unit.geschoss}</p>
        </div>
        <StatusBadge status={unit.status} />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
        <dt className="text-foreground-muted">Zimmer</dt>
        <dd className="text-right tabular-nums">{unit.zimmer}</dd>
        <dt className="text-foreground-muted">Wohnfläche</dt>
        <dd className="text-right tabular-nums">{unit.wohnflaeche} m²</dd>
        <dt className="text-foreground-muted">Sitzplatz/Balkon</dt>
        <dd className="text-right tabular-nums">{unit.sitzplatzBalkon} m²</dd>
        <dt className="text-foreground-muted">Preis</dt>
        <dd className="text-right tabular-nums font-semibold text-primary">{formatChf(unit.preis)}</dd>
      </dl>
      <div className="mt-4 border-t border-border pt-4">
        <GrundrissLink unit={unit} />
      </div>
    </div>
  );
}

function GrundrissLink({ unit }: { unit: Unit }) {
  if (!unit.grundrissPdfUrl) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-foreground-muted">
        <FileText className="size-4" strokeWidth={1.5} />
        Grundriss folgt
      </span>
    );
  }
  return (
    <a
      href={unit.grundrissPdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
    >
      <FileText className="size-4" strokeWidth={1.5} />
      Grundriss ansehen
    </a>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[] | { value: string; label: string }[];
}) {
  const normalized = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground-muted">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {normalized.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
