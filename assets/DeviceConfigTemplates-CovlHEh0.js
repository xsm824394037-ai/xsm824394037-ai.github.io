import{_ as v}from"./index-D-OKb4nr.js";import{f as T,ag as r,W as x,X as C,k as e,a3 as l,Y as o,a6 as d,G as s}from"./vue-c2hFjjkA.js";import"./ant-design-vue-CkX7VhhK.js";const E={class:"device-config-templates"},D={class:"config-section"},_={class:"config-section"},w={class:"config-section"},A={class:"config-section"},k={class:"config-section"},P=`{
  "broker": "mqtt://192.168.1.100:1883",
  "clientId": "sensor_001",
  "username": "iot_user",
  "password": "iot_password",
  "keepAlive": 60,
  "cleanSession": true,
  "qos": 1,
  "retain": false,
  "will": {
    "topic": "device/sensor_001/status",
    "payload": "offline",
    "qos": 1,
    "retain": true
  }
}`,B=`{
  "topics": {
    "data": "device/sensor_001/data",
    "status": "device/sensor_001/status",
    "command": "device/sensor_001/command"
  },
  "dataFormat": {
    "temperature": "float",
    "humidity": "float",
    "timestamp": "string"
  },
  "reportInterval": 30,
  "retryCount": 3,
  "timeout": 5000
}`,F=`{
  "baseUrl": "http://192.168.1.100:8080",
  "username": "admin",
  "password": "admin123",
  "timeout": 10000,
  "headers": {
    "Content-Type": "application/json",
    "User-Agent": "IoT-Client/1.0"
  },
  "authType": "basic",
  "sslVerify": false
}`,S=`{
  "endpoints": {
    "status": "https://mars3d-monitor.app.workbuddy.host/api/status",
    "data": "https://mars3d-monitor.app.workbuddy.host/api/data",
    "config": "https://mars3d-monitor.app.workbuddy.host/api/config",
    "control": "https://mars3d-monitor.app.workbuddy.host/api/control"
  },
  "dataFormat": "json",
  "pollInterval": 5,
  "retryCount": 3,
  "timeout": 10000
}`,I=`{
  "host": "192.168.1.100",
  "port": 502,
  "unitId": 1,
  "timeout": 5000,
  "retryCount": 3,
  "byteOrder": "big",
  "wordOrder": "big"
}`,q=`{
  "registers": {
    "temperature": {
      "address": 100,
      "type": "holding",
      "dataType": "float32",
      "scale": 0.1
    },
    "humidity": {
      "address": 102,
      "type": "holding",
      "dataType": "float32",
      "scale": 0.1
    },
    "status": {
      "address": 200,
      "type": "coil",
      "dataType": "boolean"
    }
  },
  "pollInterval": 5,
  "batchSize": 10
}`,M=`{
  "rtspUrl": "rtsp://admin:password@192.168.1.100:554/stream1",
  "httpUrl": "http://192.168.1.100:8080",
  "username": "admin",
  "password": "password",
  "timeout": 10000,
  "retryCount": 3
}`,H=`{
  "video": {
    "resolution": "1920x1080",
    "frameRate": 25,
    "bitrate": 4000,
    "codec": "H.264"
  },
  "audio": {
    "enabled": true,
    "codec": "AAC",
    "sampleRate": 44100
  },
  "motion": {
    "enabled": true,
    "sensitivity": 80,
    "regions": []
  },
  "storage": {
    "type": "local",
    "path": "/var/recordings",
    "maxSize": "10GB"
  }
}`,N=`{
  "gateway": "192.168.1.200",
  "deviceEui": "70B3D57ED0000001",
  "appKey": "2B7E151628AED2A6ABF7158809CF4F3C",
  "nwkKey": "2B7E151628AED2A6ABF7158809CF4F3C",
  "frequency": 868.1,
  "spreadingFactor": 7,
  "bandwidth": 125
}`,R=`{
  "sensors": {
    "temperature": {
      "type": "DS18B20",
      "unit": "celsius",
      "precision": 0.1,
      "range": [-40, 85]
    },
    "humidity": {
      "type": "DHT22",
      "unit": "percent",
      "precision": 0.1,
      "range": [0, 100]
    }
  },
  "reportInterval": 600,
  "batteryLevel": 85,
  "alarmThresholds": {
    "temperature": {
      "min": -10,
      "max": 50
    },
    "humidity": {
      "min": 20,
      "max": 80
    }
  }
}`,K={__name:"DeviceConfigTemplates",setup(L){const p=T("mqtt"),f=m=>{p.value=m};return(m,t)=>{const n=r("a-typography-paragraph"),a=r("a-descriptions-item"),i=r("a-descriptions"),u=r("a-tab-pane"),b=r("a-tabs"),g=r("a-card");return C(),x("div",E,[e(g,{title:"设备配置模板",bordered:!1},{default:l(()=>[e(b,{activeKey:p.value,"onUpdate:activeKey":t[0]||(t[0]=y=>p.value=y),onChange:f},{default:l(()=>[e(u,{key:"mqtt",tab:"MQTT设备"},{default:l(()=>[o("div",D,[t[7]||(t[7]=o("h4",null,"连接参数示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(P))]),_:1}),t[8]||(t[8]=o("h4",null,"设备配置示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(B))]),_:1}),t[9]||(t[9]=o("h4",null,"现实设备示例",-1)),e(i,{column:2,bordered:""},{default:l(()=>[e(a,{label:"设备型号"},{default:l(()=>t[1]||(t[1]=[s("ESP32温湿度传感器")])),_:1}),e(a,{label:"制造商"},{default:l(()=>t[2]||(t[2]=[s("乐鑫科技")])),_:1}),e(a,{label:"协议类型"},{default:l(()=>t[3]||(t[3]=[s("MQTT")])),_:1}),e(a,{label:"连接方式"},{default:l(()=>t[4]||(t[4]=[s("WiFi + MQTT")])),_:1}),e(a,{label:"数据上报频率"},{default:l(()=>t[5]||(t[5]=[s("30秒")])),_:1}),e(a,{label:"数据格式"},{default:l(()=>t[6]||(t[6]=[s("JSON")])),_:1})]),_:1})])]),_:1}),e(u,{key:"http",tab:"HTTP设备"},{default:l(()=>[o("div",_,[t[16]||(t[16]=o("h4",null,"连接参数示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(F))]),_:1}),t[17]||(t[17]=o("h4",null,"设备配置示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(S))]),_:1}),t[18]||(t[18]=o("h4",null,"现实设备示例",-1)),e(i,{column:2,bordered:""},{default:l(()=>[e(a,{label:"设备型号"},{default:l(()=>t[10]||(t[10]=[s("海康威视摄像头")])),_:1}),e(a,{label:"制造商"},{default:l(()=>t[11]||(t[11]=[s("海康威视")])),_:1}),e(a,{label:"协议类型"},{default:l(()=>t[12]||(t[12]=[s("HTTP")])),_:1}),e(a,{label:"连接方式"},{default:l(()=>t[13]||(t[13]=[s("以太网 + HTTP API")])),_:1}),e(a,{label:"数据上报频率"},{default:l(()=>t[14]||(t[14]=[s("实时")])),_:1}),e(a,{label:"数据格式"},{default:l(()=>t[15]||(t[15]=[s("XML/JSON")])),_:1})]),_:1})])]),_:1}),e(u,{key:"modbus",tab:"Modbus设备"},{default:l(()=>[o("div",w,[t[25]||(t[25]=o("h4",null,"连接参数示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(I))]),_:1}),t[26]||(t[26]=o("h4",null,"设备配置示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(q))]),_:1}),t[27]||(t[27]=o("h4",null,"现实设备示例",-1)),e(i,{column:2,bordered:""},{default:l(()=>[e(a,{label:"设备型号"},{default:l(()=>t[19]||(t[19]=[s("施耐德PLC")])),_:1}),e(a,{label:"制造商"},{default:l(()=>t[20]||(t[20]=[s("施耐德电气")])),_:1}),e(a,{label:"协议类型"},{default:l(()=>t[21]||(t[21]=[s("Modbus TCP")])),_:1}),e(a,{label:"连接方式"},{default:l(()=>t[22]||(t[22]=[s("以太网 + Modbus TCP")])),_:1}),e(a,{label:"数据读取频率"},{default:l(()=>t[23]||(t[23]=[s("5秒")])),_:1}),e(a,{label:"数据格式"},{default:l(()=>t[24]||(t[24]=[s("寄存器值")])),_:1})]),_:1})])]),_:1}),e(u,{key:"camera",tab:"摄像头设备"},{default:l(()=>[o("div",A,[t[34]||(t[34]=o("h4",null,"连接参数示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(M))]),_:1}),t[35]||(t[35]=o("h4",null,"设备配置示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(H))]),_:1}),t[36]||(t[36]=o("h4",null,"现实设备示例",-1)),e(i,{column:2,bordered:""},{default:l(()=>[e(a,{label:"设备型号"},{default:l(()=>t[28]||(t[28]=[s("大华网络摄像头")])),_:1}),e(a,{label:"制造商"},{default:l(()=>t[29]||(t[29]=[s("大华技术")])),_:1}),e(a,{label:"协议类型"},{default:l(()=>t[30]||(t[30]=[s("RTSP/HTTP")])),_:1}),e(a,{label:"连接方式"},{default:l(()=>t[31]||(t[31]=[s("以太网 + RTSP流")])),_:1}),e(a,{label:"视频分辨率"},{default:l(()=>t[32]||(t[32]=[s("1920x1080")])),_:1}),e(a,{label:"帧率"},{default:l(()=>t[33]||(t[33]=[s("25fps")])),_:1})]),_:1})])]),_:1}),e(u,{key:"sensor",tab:"传感器设备"},{default:l(()=>[o("div",k,[t[43]||(t[43]=o("h4",null,"连接参数示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(N))]),_:1}),t[44]||(t[44]=o("h4",null,"设备配置示例",-1)),e(n,null,{default:l(()=>[o("pre",{class:"config-example"},d(R))]),_:1}),t[45]||(t[45]=o("h4",null,"现实设备示例",-1)),e(i,{column:2,bordered:""},{default:l(()=>[e(a,{label:"设备型号"},{default:l(()=>t[37]||(t[37]=[s("温湿度传感器")])),_:1}),e(a,{label:"制造商"},{default:l(()=>t[38]||(t[38]=[s("博世")])),_:1}),e(a,{label:"协议类型"},{default:l(()=>t[39]||(t[39]=[s("LoRaWAN")])),_:1}),e(a,{label:"连接方式"},{default:l(()=>t[40]||(t[40]=[s("LoRa + 网关")])),_:1}),e(a,{label:"数据上报频率"},{default:l(()=>t[41]||(t[41]=[s("10分钟")])),_:1}),e(a,{label:"电池寿命"},{default:l(()=>t[42]||(t[42]=[s("5年")])),_:1})]),_:1})])]),_:1})]),_:1},8,["activeKey"])]),_:1})])}}},Q=v(K,[["__scopeId","data-v-0000d7f4"]]);export{Q as default};
