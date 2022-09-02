import React, { useEffect, useState } from "react";
import axios from "axios";
import ForexCard from "./ForexCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Forex = (props) => {
  const data = {
    success: true,
    terms: "https://currencylayer.com/terms",
    privacy: "https://currencylayer.com/privacy",
    timestamp: 1662106863,
    source: "USD",
    quotes: {
      USDAED: 3.672995,
      USDAFN: 88.765687,
      USDALL: 118.060612,
      USDAMD: 406.739147,
      USDANG: 1.813589,
      USDAOA: 428.58145,
      USDARS: 139.167896,
      USDAUD: 1.469515,
      USDAWG: 1.805,
      USDAZN: 1.702842,
      USDBAM: 1.964326,
      USDBBD: 2.031808,
      USDBDT: 95.621463,
      USDBGN: 1.961105,
      USDBHD: 0.37703,
      USDBIF: 2075.907541,
      USDBMD: 1,
      USDBND: 1.408277,
      USDBOB: 6.953373,
      USDBRL: 5.241905,
      USDBSD: 1.006252,
      USDBTC: 4.9814856e-5,
      USDBTN: 79.956813,
      USDBWP: 12.96781,
      USDBYN: 2.540513,
      USDBYR: 19600,
      USDBZD: 2.028393,
      USDCAD: 1.313697,
      USDCDF: 2025.000029,
      USDCHF: 0.979615,
      USDCLF: 0.032511,
      USDCLP: 897.069662,
      USDCNY: 6.902301,
      USDCOP: 4480.5,
      USDCRC: 651.380247,
      USDCUC: 1,
      USDCUP: 26.5,
      USDCVE: 110.743968,
      USDCZK: 24.502803,
      USDDJF: 179.144801,
      USDDKK: 7.446698,
      USDDOP: 53.288539,
      USDDZD: 140.709762,
      USDEGP: 19.225802,
      USDERN: 15,
      USDETB: 53.114081,
      USDEUR: 1.001315,
      USDFJD: 2.23175,
      USDFKP: 0.823605,
      USDGBP: 0.864955,
      USDGEL: 2.870608,
      USDGGP: 0.823605,
      USDGHS: 10.113139,
      USDGIP: 0.823605,
      USDGMD: 55.149493,
      USDGNF: 8687.848703,
      USDGTQ: 7.788586,
      USDGYD: 210.530545,
      USDHKD: 7.84884,
      USDHNL: 24.765607,
      USDHRK: 7.533704,
      USDHTG: 118.735783,
      USDHUF: 399.084034,
      USDIDR: 14908,
      USDILS: 3.376755,
      USDIMP: 0.823605,
      USDINR: 79.78305,
      USDIQD: 1468.711552,
      USDIRR: 42249.999817,
      USDISK: 141.870246,
      USDJEP: 0.823605,
      USDJMD: 151.780244,
      USDJOD: 0.708973,
      USDJPY: 140.284021,
      USDKES: 120.250057,
      USDKGS: 80.782501,
      USDKHR: 4132.649731,
      USDKMF: 494.950203,
      USDKPW: 900.00035,
      USDKRW: 1363.084982,
      USDKWD: 0.30842,
      USDKYD: 0.838543,
      USDKZT: 473.919179,
      USDLAK: 15563.110453,
      USDLBP: 1521.696555,
      USDLKR: 367.30399,
      USDLRD: 154.250189,
      USDLSL: 17.297841,
      USDLTL: 2.95274,
      USDLVL: 0.60489,
      USDLYD: 4.962161,
      USDMAD: 10.635699,
      USDMDL: 19.491797,
      USDMGA: 4232.812735,
      USDMKD: 61.883885,
      USDMMK: 2113.182213,
      USDMNT: 3194.961563,
      USDMOP: 8.134042,
      USDMRO: 356.999828,
      USDMUR: 45.138368,
      USDMVR: 15.350009,
      USDMWK: 1033.584091,
      USDMXN: 20.14896,
      USDMYR: 4.484003,
      USDMZN: 63.829992,
      USDNAD: 17.311502,
      USDNGN: 422.959993,
      USDNIO: 36.165415,
      USDNOK: 10.01604,
      USDNPR: 127.933873,
      USDNZD: 1.644135,
      USDOMR: 0.38498,
      USDPAB: 1.006252,
      USDPEN: 3.871444,
      USDPGK: 3.545807,
      USDPHP: 56.807501,
      USDPKR: 219.116881,
      USDPLN: 4.716369,
      USDPYG: 6935.797323,
      USDQAR: 3.640997,
      USDRON: 4.8433,
      USDRSD: 117.550034,
      USDRUB: 60.374997,
      USDRWF: 1039.491789,
      USDSAR: 3.757721,
      USDSBD: 8.210319,
      USDSCR: 12.884419,
      USDSDG: 577.500235,
      USDSEK: 10.75834,
      USDSGD: 1.402605,
      USDSHP: 1.377402,
      USDSLL: 14175.000013,
      USDSOS: 568.496461,
      USDSRD: 25.264977,
      USDSTD: 20697.981008,
      USDSVC: 8.805259,
      USDSYP: 2512.53037,
      USDSZL: 17.280337,
      USDTHB: 36.722503,
      USDTJS: 10.213674,
      USDTMT: 3.5,
      USDTND: 3.219806,
      USDTOP: 2.36675,
      USDTRY: 18.221355,
      USDTTD: 6.821704,
      USDTWD: 30.598499,
      USDTZS: 2332.000047,
      USDUAH: 37.164265,
      USDUGX: 3828.859819,
      USDUYU: 41.051548,
      USDUZS: 11027.012369,
      USDVND: 23462.5,
      USDVUV: 116.056079,
      USDWST: 2.66746,
      USDXAF: 658.82288,
      USDXAG: 0.055659,
      USDXAU: 0.000587,
      USDXCD: 2.70255,
      USDXDR: 0.773364,
      USDXOF: 658.806337,
      USDXPF: 120.374975,
      USDYER: 250.250024,
      USDZAR: 17.28883,
      USDZMK: 9001.141813,
      USDZMW: 15.396243,
      USDZWL: 321.999592,
    },
  };
  const [forexData, setForexData] = useState(data);

  async function getForexData(date) {
    if (!date) {
      try {
        const data = axios.get(
          "http://api.currencylayer.com/live?access_key=b5847a6283683681189fedff3e3169e5"
        );
        console.log(data);
        // setForexData(data);
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  }

  //   useEffect(() => {
  //     getForexData(props.date);
  //   }, []);

  const convertTo = [
    "USD",
    "CAD",
    "HKD",
    "PHP",
    "HUF",
    "AUD",
    "JPY",
    "CNY",
    "MXN",
    "MYR",
    "KRW",
    "NZD",
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {forexData &&
          convertTo.map((forex, idx) => {
            console.log(forexData.quotes["USD" + convertTo[idx]]);
            return (
              <Col sm={3} style={{ paddingBottom: "2rem" }}>
                <ForexCard
                  to={forex}
                  quote={forexData.quotes["USD" + convertTo[idx]]}
                ></ForexCard>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Forex;
