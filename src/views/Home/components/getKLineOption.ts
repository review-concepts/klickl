import { echarts } from "@/plugins/echarts";
import type { ECOption } from "@/plugins/echarts";
export default (): ECOption => {
  const option: ECOption = {
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    xAxis: {
      type: "category",
      splitLine: {
        show: false,
        lineStyle: {
          color: "#fff",
          width: 0, //这里是为了突出显示加上的
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#E4E6EE",
          width: 0, //这里是为了突出显示加上的
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
        lineStyle: {
          color: "#fff",
          width: 0, //这里是为了突出显示加上的
        },
      },
    },
    series: {
      type: "line",
      itemStyle: {
        color: "rgb(0, 168, 255)",
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(0, 168, 255)",
          },
          {
            offset: 1,
            color: "rgba(0, 168, 255, 0)",
          },
        ]),
      },
      showSymbol: false,
      data: [1, 2, 3, 4, 5],
    },
  };

  return option;
};
