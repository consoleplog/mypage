import React from 'react';
import echarts from 'echarts'

class App extends React.Component {
  componentDidMount(){
  let myChart = echarts.init(document.getElementById('main'));
// 绘制图表
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],

          }]
      });
      // myChart.setOption({
      //     series : [
      //         {
      //             name: '访问来源',
      //             type: 'pie',
      //             radius: '55%',
      //             data:[
      //                 {value:400, name:'搜索引擎'},
      //                 {value:335, name:'直接访问'},
      //                 {value:310, name:'邮件营销'},
      //                 {value:274, name:'联盟广告'},
      //                 {value:235, name:'视频广告'}
      //             ]
      //         }
      //     ]
      // })

  }
  render () {
    return(
      <div>
        <div id='main' style={{width:'600px',height:'400px'}}>
        </div>
        <LunBo />
      </div>
    )
  }
}

export default App;
