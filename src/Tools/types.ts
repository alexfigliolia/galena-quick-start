import type { LoggerPlugin, ReporterPlugin } from "@figliolia/metrics";

export type ReportedPlugins = {
  reporter: typeof ReporterPlugin;
  logger?: typeof LoggerPlugin;
};
