// var allCities = {
//   "data": {
//     "allCities": {
//       "edges": [
//         {
//           "node": {
//             "name": "Belo Horizonte",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -43.9484139, -19.9196218 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Brasília",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -47.882166, -15.794229 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Cajamar",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -46.8471193, -23.3429647 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Campinas",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -47.06324, -22.907104 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Curitiba",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -49.25, -25.4167 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Fortaleza",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -38.526739, -3.731903 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Goiânia",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -49.25, -16.666667 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Manaus",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -60.016667, -3.1 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Porto Alegre",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -51.15, -30.01 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Recife",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -34.876964, -8.047562 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Ribeirão Preto",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -47.810324, -21.170401 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Rio de Janeiro",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -43.182259, -22.949177 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Salvador",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -38.501414, -12.972218 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "Santos",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -46.326409, -23.95613 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "São José dos Campos",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -45.868264, -23.184803 ] }"
//           }
//         },
//         {
//           "node": {
//             "name": "São Paulo",
//             "geoCenter": "{ \"type\": \"Point\", \"coordinates\": [ -46.6561139, -23.5616072 ] }"
//           }
//         }
//       ]
//     }
//   }
//  }

var allCities = [
  {
    "name": "Belo Horizonte",
    "coordinates": [-19.919386, -43.953045]
  },
  {
    "name": "Brasília",
    "coordinates": [-15.791715, -47.894704]
  },
  {
    "name": "Cajamar",
    "coordinates": [-23.353257, -46.883710]
  },
  {
    "name": "Campinas",
    "coordinates": [-22.914738, -47.069480]
  },
  {
    "name": "Curitiba",
    "coordinates": [-25.433306, -49.270877]
  },
  {
    "name": "Fortaleza",
    "coordinates": [-3.735280, -38.524786]
  },
  {
    "name": "Goiânia",
    "coordinates": [-16.689830, -49.263747]
  },
  {
    "name": "Manaus",
    "coordinates": [-3.116650, -60.012424]
  },
  {
    "name": "Porto Alegre",
    "coordinates": [-30.036864, -51.200575]
  },
  {
    "name": "Recife",
    "coordinates": [-8.061132, -34.876803]
  },
  {
    "name": "Ribeirão Preto",
    "coordinates": [-21.168647, -47.822513]
  },
  {
    "name": "Rio de Janeiro",
    "coordinates": [-22.909189, -43.190278]
  },
  {
    "name": "Salvador",
    "coordinates": [-12.976543, -38.482965]
  },
  {
    "name": "Santos",
    "coordinates": [-23.967218, -46.327502]
  },
  {
    "name": "São José dos Campos",
    "coordinates": [-23.228545, -45.898695]
  },
  {
    "name": "São Paulo",
    "coordinates": [-23.546075, -46.606560]
  }
]

var locations = {
  "data": {
    "closestDrivers": {
      "driversCount": 67,
      "readyDriversCount": 48,
      "busyDriversCount": 19,
      "drivers": [
        {
          "lng": -43.18275451660156,
          "lat": -22.949079513549805,
          "busy": false
        },
        {
          "lng": -43.183101654052734,
          "lat": -22.939640045166016,
          "busy": false
        },
        {
          "lng": -43.18262481689453,
          "lat": -22.945302963256836,
          "busy": true
        },
        {
          "lng": -43.192928314208984,
          "lat": -22.95555305480957,
          "busy": false
        },
        {
          "lng": -43.18989181518555,
          "lat": -22.955991744995117,
          "busy": false
        },
        {
          "lng": -43.182376861572266,
          "lat": -22.9465274810791,
          "busy": false
        },
        {
          "lng": -43.20387649536133,
          "lat": -22.960220336914062,
          "busy": false
        },
        {
          "lng": -43.18211364746094,
          "lat": -22.965097427368164,
          "busy": true
        },
        {
          "lng": -43.18184280395508,
          "lat": -22.953067779541016,
          "busy": false
        },
        {
          "lng": -43.18255615234375,
          "lat": -22.954957962036133,
          "busy": false
        },
        {
          "lng": -43.18485641479492,
          "lat": -22.951797485351562,
          "busy": true
        },
        {
          "lng": -43.200592041015625,
          "lat": -22.956192016601562,
          "busy": false
        },
        {
          "lng": -43.17661666870117,
          "lat": -22.95349884033203,
          "busy": true
        },
        {
          "lng": -43.1925163269043,
          "lat": -22.95607566833496,
          "busy": false
        },
        {
          "lng": -43.168968200683594,
          "lat": -22.95272445678711,
          "busy": false
        },
        {
          "lng": -43.202388763427734,
          "lat": -22.940319061279297,
          "busy": false
        },
        {
          "lng": -43.18243408203125,
          "lat": -22.946489334106445,
          "busy": false
        },
        {
          "lng": -43.20423126220703,
          "lat": -22.96040916442871,
          "busy": true
        },
        {
          "lng": -43.199729919433594,
          "lat": -22.95652198791504,
          "busy": false
        },
        {
          "lng": -43.19068145751953,
          "lat": -22.95417022705078,
          "busy": false
        },
        {
          "lng": -43.18281555175781,
          "lat": -22.948631286621094,
          "busy": false
        },
        {
          "lng": -43.19175720214844,
          "lat": -22.957414627075195,
          "busy": false
        },
        {
          "lng": -43.16802978515625,
          "lat": -22.96211051940918,
          "busy": false
        },
        {
          "lng": -43.199378967285156,
          "lat": -22.96561622619629,
          "busy": true
        },
        {
          "lng": -43.18263626098633,
          "lat": -22.94648551940918,
          "busy": false
        },
        {
          "lng": -43.17625045776367,
          "lat": -22.956640243530273,
          "busy": false
        },
        {
          "lng": -43.19647979736328,
          "lat": -22.955944061279297,
          "busy": false
        },
        {
          "lng": -43.20512771606445,
          "lat": -22.938697814941406,
          "busy": false
        },
        {
          "lng": -43.182960510253906,
          "lat": -22.94745445251465,
          "busy": false
        },
        {
          "lng": -43.19564437866211,
          "lat": -22.955442428588867,
          "busy": true
        },
        {
          "lng": -43.18984603881836,
          "lat": -22.955928802490234,
          "busy": false
        },
        {
          "lng": -43.174720764160156,
          "lat": -22.962343215942383,
          "busy": false
        },
        {
          "lng": -43.185401916503906,
          "lat": -22.971012115478516,
          "busy": true
        },
        {
          "lng": -43.17342758178711,
          "lat": -22.965299606323242,
          "busy": false
        },
        {
          "lng": -43.19571304321289,
          "lat": -22.93844985961914,
          "busy": false
        },
        {
          "lng": -43.17510986328125,
          "lat": -22.92940902709961,
          "busy": false
        },
        {
          "lng": -43.21089172363281,
          "lat": -22.9610652923584,
          "busy": false
        },
        {
          "lng": -43.177608489990234,
          "lat": -22.93052101135254,
          "busy": false
        },
        {
          "lng": -43.18367004394531,
          "lat": -22.92926025390625,
          "busy": false
        },
        {
          "lng": -43.19023513793945,
          "lat": -22.96965980529785,
          "busy": false
        },
        {
          "lng": -43.174983978271484,
          "lat": -22.93302345275879,
          "busy": true
        },
        {
          "lng": -43.1766357421875,
          "lat": -22.950984954833984,
          "busy": false
        },
        {
          "lng": -43.19587326049805,
          "lat": -22.957029342651367,
          "busy": true
        },
        {
          "lng": -43.175174713134766,
          "lat": -22.951236724853516,
          "busy": true
        },
        {
          "lng": -43.18234634399414,
          "lat": -22.946456909179688,
          "busy": false
        },
        {
          "lng": -43.1761589050293,
          "lat": -22.957246780395508,
          "busy": true
        },
        {
          "lng": -43.18410110473633,
          "lat": -22.935470581054688,
          "busy": true
        },
        {
          "lng": -43.20402526855469,
          "lat": -22.962377548217773,
          "busy": false
        },
        {
          "lng": -43.20835494995117,
          "lat": -22.963085174560547,
          "busy": false
        },
        {
          "lng": -43.1777458190918,
          "lat": -22.931184768676758,
          "busy": false
        },
        {
          "lng": -43.17735290527344,
          "lat": -22.93638038635254,
          "busy": false
        },
        {
          "lng": -43.182430267333984,
          "lat": -22.94654655456543,
          "busy": false
        },
        {
          "lng": -43.20221710205078,
          "lat": -22.940841674804688,
          "busy": false
        },
        {
          "lng": -43.20226287841797,
          "lat": -22.972984313964844,
          "busy": false
        },
        {
          "lng": -43.182655334472656,
          "lat": -22.954431533813477,
          "busy": true
        },
        {
          "lng": -43.182498931884766,
          "lat": -22.95499610900879,
          "busy": true
        },
        {
          "lng": -43.178443908691406,
          "lat": -22.954618453979492,
          "busy": true
        },
        {
          "lng": -43.19104766845703,
          "lat": -22.95828628540039,
          "busy": false
        },
        {
          "lng": -43.18306350708008,
          "lat": -22.949241638183594,
          "busy": false
        },
        {
          "lng": -43.18173599243164,
          "lat": -22.95513153076172,
          "busy": false
        },
        {
          "lng": -43.17778778076172,
          "lat": -22.93130111694336,
          "busy": true
        },
        {
          "lng": -43.17673873901367,
          "lat": -22.939287185668945,
          "busy": false
        },
        {
          "lng": -43.1777458190918,
          "lat": -22.931453704833984,
          "busy": false
        },
        {
          "lng": -43.17443084716797,
          "lat": -22.933067321777344,
          "busy": false
        },
        {
          "lng": -43.19908905029297,
          "lat": -22.974618911743164,
          "busy": true
        },
        {
          "lng": -43.18776321411133,
          "lat": -22.970762252807617,
          "busy": false
        },
        {
          "lng": -43.205848693847656,
          "lat": -22.962705612182617,
          "busy": true
        }
      ]
    }
  }
}