export function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    let output: string[][][] = []

    console.log(pros)
    console.log(preferences)

    // create a storage for each kind of service and its pros called servicePreferences
    // add the service to the servicePreferences array, and add a second empty array to store names
   

    let servicePreferences = [];
    let distinctServices: any = []

    // get distinct services
    preferences.forEach((preference) => {
        // add the preference in distinct services if its not there yet

        preference.forEach((pref) => {
            let isInDistinctService = distinctServices.filter((service) => {
                console.log(service)
                console.log(preference)
                return service === pref

            })
            if (isInDistinctService.length === 0) {
                distinctServices.push(pref)
                console.log(distinctServices)
            }
        })
    })
    

     // add the service to the servicePreferences array, and add a second empty array to store names
  servicePreferences =  distinctServices.map((service: any) => {
    return [ [service] ]
  })

  console.log(servicePreferences)


  // for each pro find what their preferences are, 
  // for each preference they have, find the array in servicePreferences that contains the service of their preference > push their name for the 2nd (index 1) array

  let index = 0;
  pros.forEach((pro)=> {
    // get their preference
    const prefs = preferences[index]
    prefs.forEach((pref) => {
        // find this preference in the servicePreferences array and then push the pro name into the second array
        servicePreferences.map((servicePreference: any) => {
             if(servicePreference[0][0] === pref){
                 console.log(servicePreference[0][0])
                 console.log(pref)
            
               if(!servicePreference[1]){
                   servicePreference.push([])
                   servicePreference[1].push(pro)
               } else {
                servicePreference[1].push(pro)
               }
             
            
             }

             console.log(servicePreferences)
        })
    })

    index++
  })
  output = servicePreferences

    return output;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));