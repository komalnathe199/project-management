import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';




const StatusViewChart = () => {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        // title: {
        //     text: "Status Overview"
        // },
        subtitles: [{
            text: "71% Done",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Done", y: 5 },
                { name: "To Do", y: 31 },
                { name: "In Progress", y: 40 },

            ]
        }]
    }
  return (
      <div>
          <CanvasJSChart options={options}/>         
      </div>
  )
}

export default StatusViewChart


