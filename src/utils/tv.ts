import dayjs from "@/plugins/dayjs";
import type { Timezone } from "public/charting_library/charting_library";
import type { ThemeMode } from ".";

/**
 * 设置 overrides
 * @param themeMode light | dark
 * @returns Object
 */
export const setOverrides = (themeMode: ThemeMode) => {
  const timezone = dayjs.tz.guess() as Timezone;
  const themeConfig = {
    Light: {
      up: "#2fd67c",
      down: "#e1405a",
      bg: "#ffffff",
      grid: "#f5f5f5",
      cross: "#1D2F4E",
    },
    Dark: {
      up: "#2fd67c",
      down: "#e1405a",
      bg: "#17171A",
      grid: "#131e27",
      cross: "#1D2F4E",
    },
  };
  const t = themeConfig[themeMode];
  return {
    timezone,
    volumePaneSize: "medium", // 技术分析线模块大小
    // 网格颜色
    "paneProperties.vertGridProperties.color": t.grid, // 图表栅格线-垂直线
    "paneProperties.horzGridProperties.color": t.grid, // 图标栅格线-水平线

    "paneProperties.background": t.bg, // 图表背景色
    "paneProperties.backgroundGradientStartColor": t.bg,
    "paneProperties.backgroundGradientEndColor": t.bg,
    "paneProperties.vertGridProperties.style": 0,
    "paneProperties.horzGridProperties.style": 0,
    "paneProperties.crossHairProperties.color": t.cross, // 十字线

    "paneProperties.legendProperties.showStudyArguments": true, // 成交量指标相关
    "paneProperties.legendProperties.showStudyTitles": true,
    "paneProperties.legendProperties.showStudyValues": true,

    "mainSeriesProperties.style": 1, // k线类型的索引  1实心 9空心
    "mainSeriesProperties.candleStyle.upColor": t.up,
    "mainSeriesProperties.candleStyle.downColor": t.down,
    "mainSeriesProperties.candleStyle.borderUpColor": t.up,
    "mainSeriesProperties.candleStyle.borderDownColor": t.down,
    "mainSeriesProperties.candleStyle.wickUpColor": t.up,
    "mainSeriesProperties.candleStyle.wickDownColor": t.down,
    "mainSeriesProperties.barStyle.upColor": t.up,
    "mainSeriesProperties.barStyle.downColor": t.down,
    "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
    "mainSeriesProperties.barStyle.dontDrawOpen": false,

    // 面积图
    "mainSeriesProperties.areaStyle.color1": "rgba(196, 113, 128, 0.2)",
    "mainSeriesProperties.areaStyle.color2": "rgba(196, 113, 128, 0)",
    "mainSeriesProperties.areaStyle.linecolor": "rgba(196, 113, 128, 0.8)",
    "mainSeriesProperties.areaStyle.linestyle": 0,
    "mainSeriesProperties.areaStyle.linewidth": 1,
    "mainSeriesProperties.areaStyle.priceSource": "close",
  };
};

/**
 * 设置study_overrides
 * @param themeMode light | dark
 * @returns Object
 */
export const setStudiesOverrides = (themeMode: ThemeMode) => {
  const themes = {
    Light: {
      up: "#2fd67c",
      down: "#e1405a",
      ma: "#6BB0D3",
      t: 70,
      v: !1,
    },
    Dark: {
      up: "#2fd67c",
      down: "#e1405a",
      ma: "#6BB0D3",
      t: 70,
      v: !1,
    },
  };
  const t = themes[themeMode];
  return {
    "volume.volume.transparency": t.t,
    "volume.options.showStudyArguments": t.v,

    "volume.volume.color.0": t.down,
    "volume.volume.color.1": t.up,
    "volume.volume.plottype": "columns",
    // 交易量平均线
    "volume.show ma": true,
    "volume.volume ma.transparency": 10,
    "volume.volume ma.plottype": "line",
    "volume.volume ma.linewidth": 1,
    "volume.volume ma.color": t.ma,
    "volume.ma Length": 20,
  };
};
