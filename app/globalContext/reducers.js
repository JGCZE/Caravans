const caravanReducer = (caravans, action) => {

  switch (action.type) {
    case 'campervan': {
     return [ 
        ...caravans.filter((car) => car.vehicleType == 'Campervan')
      ]
    }
  }
}

export default caravanReducer;
