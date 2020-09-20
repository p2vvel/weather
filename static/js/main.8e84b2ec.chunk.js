(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{58:function(e,a,t){e.exports=t(74)},63:function(e,a,t){},65:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),c=t.n(i),s=(t(63),t(28)),o=t.n(s),l=t(35),d=t(36),m=t(37),h=t(13),u=t(45),w=t(43),p=(t(65),t(22),t(80)),f=t(84),g=t(85),_=t(51),E=t(83),v=t(29),y=t.n(v),b=t(88),x=t(87),S=t(79),N=t(50),C=t(91),k=t(81);function D(e){return r.a.createElement(b.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",sticky:"top",style:{opacity:"0.9"}},r.a.createElement(b.a.Brand,{style:{fontFamily:"ShadowsIntoLight"}},e.logo),r.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(x.a,{inline:!0,className:"ml-auto",onSubmit:function(a){a.preventDefault(),e.onSearchSubmit()}},r.a.createElement(S.a,null,r.a.createElement(N.a,{type:"text",placeholder:"Choose location...",className:"my-1",value:e.searchValue,onChange:function(a){e.onSearchChange(a.target.value)}}),r.a.createElement(S.a.Append,null,r.a.createElement(C.a,{variant:"warning",type:"submit",className:"my-1 d-flex align-items-center justify-content-center flex-grow-1"},e.isLoadingData?r.a.createElement(p.a,{animation:"border",variant:"dark",size:"sm"}):r.a.createElement(k.a,null)))))))}var L=t(86);function j(e){return r.a.createElement(L.a,{show:e.show,onHide:e.onCancel},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Choose one")),r.a.createElement(L.a.Body,null,r.a.createElement(S.a,{className:"my-2"},r.a.createElement(N.a,{type:"text",placeholder:"Choose location...",value:e.searchValue,onChange:function(a){e.onSearchChange(a.target.value)}}),""===e.searchValue||r.a.createElement(S.a.Append,null,r.a.createElement(C.a,{className:"d-flex align-items-center justify-content-center",variant:"outline-warning",onClick:e.onSearchSubmit},e.isLoadingData?r.a.createElement(p.a,{animation:"border",variant:"dark",size:"sm"}):r.a.createElement(k.a,null)))),r.a.createElement(x.a.Control,{className:"my-2",as:"select",disabled:e.choiceOptions.length<=1,onChange:function(a){return e.onChoiceChange(a.target.value)},value:e.chosenValue},e.choiceOptions)),r.a.createElement(L.a.Footer,null,r.a.createElement(C.a,{variant:"warning",onClick:e.onSave},"Choose")))}var A=t(55),H=t(90);function O(e){var a=r.a.useState(!0),t=Object(A.a)(a,2),n=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{show:n,onClose:function(){i(!1),"callback"in e&&e.callback()},delay:e.delay||5e3,autohide:!0},r.a.createElement(H.a.Header,{className:"mr-auto font-weight-bold",style:{color:"white",backgroundColor:"rgb(255, 0, 0, 0.65)"}},r.a.createElement("span",{className:"mr-auto"},e.header||"Error")),r.a.createElement(H.a.Body,{style:{color:"black"}},e.message||"Error")))}function z(e){return r.a.createElement("div",{style:{position:"fixed",right:"10px",bottom:"10px",zIndex:9999}},e.children)}var W=t(89),T=t(82);t(70),t(71);function F(e){switch(e){case"01d":return r.a.createElement("li",{className:"wi wi-day-sunny mx-1"});case"02d":return r.a.createElement("li",{className:"wi wi-day-sunny-overcast mx-1"});case"03d":return r.a.createElement("li",{className:"wi wi-day-cloudy mx-1"});case"04d":return r.a.createElement("li",{className:"wi wi-cloudy mx-1"});case"09d":return r.a.createElement("li",{className:"wi wi-showers mx-1"});case"10d":return r.a.createElement("li",{className:"wi wi-day-rain mx-1"});case"11d":return r.a.createElement("li",{className:"wi wi-day-thunderstorm mx-1"});case"13d":return r.a.createElement("li",{className:"wi wi-day-snow mx-1"});case"50d":return r.a.createElement("li",{className:"wi wi-day-fog mx-1"});case"01n":return r.a.createElement("li",{className:"wi wi-night-clear mx-1"});case"02n":return r.a.createElement("li",{className:"wi wi-night-alt-partly-cloudy mx-1"});case"03n":return r.a.createElement("li",{className:"wi wi-night-alt-cloudy mx-1"});case"04n":return r.a.createElement("li",{className:"wi wi-cloudy mx-1"});case"09n":return r.a.createElement("li",{className:"wi wi-showers mx-1"});case"10n":return r.a.createElement("li",{className:"wi wi-night-alt-rain mx-1"});case"11n":return r.a.createElement("li",{className:"wi wi-night-alt-thunderstorm mx-1"});case"13n":return r.a.createElement("li",{className:"wi wi-night-alt-snow mx-1"});case"50n":return r.a.createElement("li",{className:"wi wi-night-fog mx-1"});default:return r.a.createElement("li",{className:"wi wi-alien mx-1"})}}var Y=function(e){var a="imperial"!==e.units,t=a?"m/s":"mi/h",n=a?"\xb0C":"\xb0F",i=r.a.createElement("h1",{style:{whiteSpace:"pre"}},e.placeShort),c=r.a.createElement("span",{className:"display-1"},e.icon),s=r.a.createElement("h2",null,e.date),o=r.a.createElement("h2",null,e.hour),l=r.a.createElement("p",null,e.humidity+"%",r.a.createElement("i",{className:"wi wi-humidity mx-1"})),d=r.a.createElement("p",null,e.pressure+"hPa",r.a.createElement("i",{className:"wi wi-barometer mx-1"})),m=r.a.createElement("h2",null,r.a.createElement("i",{className:"wi wi-thermometer mx-1"}),e.temperature+n),h=r.a.createElement("p",{className:"font-weight-bold"},"Feels like ",e.feelsLike+n),u=r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"mr-4"},r.a.createElement("i",{className:"wi wi-sunrise mx-1"}),e.sunriseTime),r.a.createElement("div",null,r.a.createElement("i",{className:"wi wi-sunset mx-1"}),e.sunsetTime)),w=r.a.createElement("p",null,e.windSpeed+t,r.a.createElement(W.a,{placement:"left",overlay:r.a.createElement(T.a,{id:"weather-degree-info-tooltip"},e.windDegree+"\xb0")},function(e){if(e>=336)return r.a.createElement("i",{className:"wi wi-wind towards-336-deg mx-1"});if(e>=313)return r.a.createElement("i",{className:"wi wi-wind towards-313-deg mx-1"});if(e>=293)return r.a.createElement("i",{className:"wi wi-wind towards-293-deg mx-1"});if(e>=270)return r.a.createElement("i",{className:"wi wi-wind towards-270-deg mx-1"});if(e>=248)return r.a.createElement("i",{className:"wi wi-wind towards-248-deg mx-1"});if(e>=225)return r.a.createElement("i",{className:"wi wi-wind towards-225-deg mx-1"});if(e>=203)return r.a.createElement("i",{className:"wi wi-wind towards-203-deg mx-1"});if(e>=180)return r.a.createElement("i",{className:"wi wi-wind towards-180-deg mx-1"});if(e>=158)return r.a.createElement("i",{className:"wi wi-wind towards-158-deg mx-1"});if(e>=135)return r.a.createElement("i",{className:"wi wi-wind towards-135-deg mx-1"});if(e>=113)return r.a.createElement("i",{className:"wi wi-wind towards-113-deg mx-1"});if(e>=90)return r.a.createElement("i",{className:"wi wi-wind towards-90-deg mx-1"});if(e>=68)return r.a.createElement("i",{className:"wi wi-wind towards-68-deg mx-1"});if(e>=45)return r.a.createElement("i",{className:"wi wi-wind towards-45-deg mx-1"});if(e>=23)return r.a.createElement("i",{className:"wi wi-wind towards-23-deg mx-1"});if(e>=0)return r.a.createElement("i",{className:"wi wi-wind towards-0-deg mx-1"})}(e.windDegree))),p=r.a.createElement("h2",null,e.description);return r.a.createElement("div",{className:"d-flex flex-wrap mx-1 my-3 px-3 py-1 border-black border overflow-hidden"},r.a.createElement("div",{className:"d-flex flex-column justify-content-between"},r.a.createElement("div",{className:"w-100"},i,s,o),r.a.createElement("div",{className:"mt-4"},m,h)),r.a.createElement("div",{className:"d-flex flex-column align-items-end justify-content-between ml-auto flex-grow-1"},r.a.createElement("div",{className:"d-flex flex-column align-items-end text-right"},c,p),r.a.createElement("div",{className:"d-flex flex-column align-items-end mt-4"},l,d,w,u)))},P=t(54),I=(t(73),function(e){Object(u.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).chart_options={tooltips:{callbacks:{label:function(e,a){switch(a.datasets[0].label){case"Temperature":return"Temperature: ".concat(e.yLabel," \xb0C");case"Air pressure":return"Pressure: ".concat(e.yLabel," hPa");case"Humidity":return"Humidity: ".concat(e.yLabel," %");case"Wind speed":return"Wind speed: ".concat(e.yLabel," m/s");default:return" ".concat(e.yLabel)}},mode:"nearest",axis:"x"}},legend:{display:!1},scales:{xAxes:[{type:"time",time:{tooltipFormat:"DD/MM/YYYY, HH:mm ",displayFormats:{hour:"HH:mm"},stepSize:3}}]},elements:{point:{pointStyle:"circle",pointHitRadius:30,radius:3}}},n.state={current_dataset:{}},n.chart_ref=r.a.createRef(),n.datasets={temperature:{label:"Temperature",borderColor:"rgba(0, 255, 127, 1)",backgroundColor:"rgba(0, 255, 127, 0.5)",data:n.props.data.map((function(e){return{y:e.temperature,t:e.time}}))},humidity:{label:"Humidity",borderColor:" rgba(46, 149, 180, 1)",backgroundColor:"rgba(46, 149, 180, 0.5)",data:n.props.data.map((function(e){return{y:e.humidity,t:e.time}}))},wind:{label:"Wind speed",borderColor:"rgba(118, 119, 123, 1)",backgroundColor:"rgba(118.0, 119.0, 123.0, 0.5)",data:n.props.data.map((function(e){return{y:e.wind_speed,t:e.time}}))},pressure:{label:"Air pressure",borderColor:"rgba(255, 3, 62, 1)",backgroundColor:"rgba(255, 3, 62, 0.5)",data:n.props.data.map((function(e){return{y:e.pressure,t:e.time}}))}},n.updateDataset=n.updateDataset.bind(Object(h.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.chart=this.createNewChart(this.datasets.temperature),this.chart.render()}},{key:"createNewChart",value:function(e){return this.setState({current_dataset:e}),new P.Chart(this.chart_ref.current,{type:"line",data:{datasets:[e]},options:this.chart_options})}},{key:"updateDataset",value:function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollY,this.chart_ref.current.style.minHeight="".concat(this.chart_ref.current.offsetHeight,"px"),console.log(this.chart_ref.current.style.minHeight,this.chart_ref.current.offsetHeight),this.chart.destroy(),this.chart=this.createNewChart(a),this.chart.render();case 6:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{ref:this.chart_ref,id:"hourly_chart"}),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(C.a,{size:"sm",variant:this.state.current_dataset===this.datasets.temperature?"green":"outline-green",className:"text-bolder",onClick:function(){return e.updateDataset(e.datasets.temperature)}},"Temperature"),r.a.createElement(C.a,{size:"sm",variant:this.state.current_dataset===this.datasets.pressure?"red":"outline-red",className:"text-bolder",onClick:function(){return e.updateDataset(e.datasets.pressure)}},"Pressure"),r.a.createElement(C.a,{size:"sm",variant:this.state.current_dataset===this.datasets.humidity?"aqua":"outline-aqua",className:"text-bolder",onClick:function(){return e.updateDataset(e.datasets.humidity)}},"Humidity"),r.a.createElement(C.a,{size:"sm",variant:this.state.current_dataset===this.datasets.wind?"silver":"outline-silver",className:"text-bolder",onClick:function(){return e.updateDataset(e.datasets.wind)}},"Wind speed")))}}]),t}(r.a.Component)),K=function(e){Object(u.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={units:"metric",location_name:"",weather_data:void 0,location_data:void 0,temp_location_data:void 0,loading_location_data:!1,locading_weather_data:!1,advanced_search:{show:!1,chosen_record_index:0},errors:[]},n.apiKeyWeather=n.props.apiKeyWeather||"15b95f471ae2dd3c0058c7bf468339ec",n.apiKeyLocation=n.props.apiKeyLocation||"c89c35523d4ee9",n.handleLocationSearchChange=n.handleLocationSearchChange.bind(Object(h.a)(n)),n.handleLocationSearchSubmit=n.handleLocationSearchSubmit.bind(Object(h.a)(n)),n.handleAdvanceSearchCancel=n.handleAdvanceSearchCancel.bind(Object(h.a)(n)),n.handleAdvanceSearchSubmit=n.handleAdvanceSearchSubmit.bind(Object(h.a)(n)),n.handleAdvanceSearchChoiceChange=n.handleAdvanceSearchChoiceChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleLocationSearchChange("Ujanowice, Limanowa");case 2:this.handleLocationSearchSubmit();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLocationSearchChange",value:function(e){this.setState({location_name:e})}},{key:"handleLocationSearchSubmit",value:function(){""===this.state.location_name.trim()?this.setState({advanced_search:{show:!0,chosen_record_index:0,temp_location_data:[]}}):this.fetchLocationData()}},{key:"fetchLocationData",value:function(){var e=this;this.setState({loading_location_data:!0},(function(){fetch("https://eu1.locationiq.com/v1/search.php?key=".concat(e.apiKeyLocation,"&q=").concat(e.state.location_name,"&format=json&limit=20")).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(a){1===a.length?e.setState({loading_location_data:!1,temp_location_data:a,location_data:a[0]},e.fetchWeatherData):e.setState({loading_location_data:!1,temp_location_data:a,advanced_search:{show:!0,chosen_record_index:0}})})).catch((function(a){console.log("Location API error: "+a.message),e.handleErrorAdd("Location API error: "+a.message)}))}))}},{key:"fetchWeatherData",value:function(){var e=this;console.log("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(this.state.location_data.lat,"&lon=").concat(this.state.location_data.lon,"&exclude=","minutely","&appid=").concat(this.apiKeyWeather,"&units=").concat(this.state.units)),this.setState({loading_weather_data:!0},(function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.state.location_data.lat,"&lon=").concat(e.state.location_data.lon,"&exclude=","minutely","&appid=").concat(e.apiKeyWeather,"&units=").concat(e.state.units)).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(a){return e.setState({weather_data:a,loading_weather_data:!1})})).catch((function(a){console.log("Weather API error: "+a.message),e.handleErrorAdd("Weather API error: "+a.message)}))}))}},{key:"handleAdvanceSearchChoiceChange",value:function(e){this.setState((function(a){return{advanced_search:{show:a.advanced_search.show,chosen_record_index:e}}}))}},{key:"handleAdvanceSearchCancel",value:function(){this.setState({advanced_search:{show:!1,chosen_record_index:0}})}},{key:"handleAdvanceSearchSubmit",value:function(){this.setState((function(e){return{advanced_search:{show:!1,chosen_record_index:0},location_data:e.temp_location_data[e.advanced_search.chosen_record_index]}}),this.fetchWeatherData)}},{key:"handleErrorDelete",value:function(){this.setState((function(e){return{errors:e.errors.slice(1)}}))}},{key:"handleErrorAdd",value:function(e){this.setState((function(a){return{loading_weather_data:!1,loading_location_data:!1,errors:a.errors.concat([{message:e}])}}))}},{key:"render",value:function(){var e,a=this,t=60*(new Date).getTimezoneOffset();return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{logo:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{color:"gold"}),"Weather"),onSearchChange:this.handleLocationSearchChange,onSearchSubmit:this.handleLocationSearchSubmit,isLoadingData:this.state.loading_location_data,searchValue:this.state.location_name}),r.a.createElement(j,{onCancel:this.handleAdvanceSearchCancel,onSave:this.handleAdvanceSearchSubmit,show:this.state.advanced_search.show,onSearchChange:this.handleLocationSearchChange,onSearchSubmit:this.handleLocationSearchSubmit,onChoiceChange:this.handleAdvanceSearchChoiceChange,chosenValue:this.state.advanced_search.chosen_record_index,isLoadingData:this.state.loading_location_data,searchValue:this.state.location_name,choiceOptions:void 0===this.state.temp_location_data?r.a.createElement(r.a.Fragment,null):this.state.temp_location_data.map((function(e,a){return r.a.createElement("option",{value:a,key:a},e.display_name)}))}),r.a.createElement(z,{children:this.state.errors.map((function(e,a){return r.a.createElement(O,{message:e.message,key:a})}))}),!0===this.state.loading_weather_data||void 0===this.state.weather_data?r.a.createElement("div",{className:"d-flex w-100 justify-content-center align-items-center",style:{height:"calc(100vh - 62px)"}},r.a.createElement(p.a,{animation:"border",variant:"info",size:"lg"})):r.a.createElement(f.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(_.a,{lg:{span:8,offset:2},md:{span:10,offset:1}},r.a.createElement(Y,{units:this.state.units,hour:y()(new Date(1e3*(this.state.weather_data.current.dt+this.state.weather_data.timezone_offset+t))).format("HH:mm"),date:y()(new Date(1e3*(this.state.weather_data.current.dt+this.state.weather_data.timezone_offset+t))).format("DD/MM/YYYY"),humidity:this.state.weather_data.current.humidity,temperature:this.state.weather_data.current.temp,pressure:this.state.weather_data.current.pressure,feelsLike:this.state.weather_data.current.feels_like,sunsetTime:y()(new Date(1e3*(this.state.weather_data.current.sunset+this.state.weather_data.timezone_offset+t))).format("HH:mm"),sunriseTime:y()(new Date(1e3*(this.state.weather_data.current.sunrise+this.state.weather_data.timezone_offset+t))).format("HH:mm"),windSpeed:this.state.weather_data.current.wind_speed,windDegree:this.state.weather_data.current.wind_deg,icon:F(this.state.weather_data.current.weather[0].icon),description:(e=this.state.weather_data.current.weather[0].description,e[0].toUpperCase()+e.slice(1)),placeShort:this.state.location_data.display_name.split(",")[0],placeLong:this.state.location_data.display_name}))),r.a.createElement(g.a,null,r.a.createElement(_.a,{lg:{span:8,offset:2},md:{span:10,offset:1}},r.a.createElement(I,{data:this.state.weather_data.hourly.slice(0,24).map((function(e){return{temperature:e.temp,humidity:e.humidity,pressure:e.pressure,wind_speed:e.wind_speed,time:new Date(1e3*(e.dt+a.state.weather_data.timezone_offset+t))}})),currentTime:new Date(1e3*(this.state.weather_data.current.dt+this.state.weather_data.timezone_offset+t))})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.8e84b2ec.chunk.js.map