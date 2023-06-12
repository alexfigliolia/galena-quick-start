import type { ReactNode } from "react";
import { Component } from "react";
import {
  CLSPlugin,
  CriticalResourcePlugin,
  PageLoadPlugin,
} from "@figliolia/metrics";

import { Factory } from "Tools/Metric";

export class Route extends Component<Props> {
  Metric = Factory.createMetric(`${this.props.name} TTI`, {
    pageLoad: new PageLoadPlugin(),
    CLS: new CLSPlugin(`.Route.${this.props.name}`),
    resources: new CriticalResourcePlugin(),
  });

  componentDidMount() {
    this.Metric.start();
    this.Metric.stop();
  }

  componentWillUnmount() {
    this.Metric.reset();
  }

  render() {
    const { name, children } = this.props;
    return <div className={`Route ${name}`}>{children}</div>;
  }
}

interface Props {
  name: string;
  children: ReactNode;
}
