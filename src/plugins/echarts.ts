import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import type {
  // 系列类型的定义后缀都为 SeriesOption
  LineSeriesOption,
} from "echarts/charts";
import {
  // 内置数据转换器组件 (filter, sort)
  GridComponent,
} from "echarts/components";
import type {
  GridComponentOption, // 组件类型的定义后缀都为 ComponentOption
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  LineSeriesOption | GridComponentOption
>;

// 注册必须的组件
echarts.use([
  LineChart,
  GridComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export { echarts };
