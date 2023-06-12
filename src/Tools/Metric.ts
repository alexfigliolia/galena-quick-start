import { MetricFactory } from "@figliolia/metrics";
import {
  LoggerPlugin,
  ProcessingQueue,
  ReporterPlugin,
} from "@figliolia/metrics";

import type { ReportedPlugins } from "./types";

const Queue = new ProcessingQueue("/analytics");

const Plugins: ReportedPlugins = {
  reporter: ReporterPlugin,
};

if (process.env.NODE_ENV === "development") {
  Plugins.logger = LoggerPlugin;
}

export const Factory = new MetricFactory(Plugins, Queue);
