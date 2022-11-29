(() => {
    let largerMeasurements = 0
    temp1.reduce((prev, current) => {
        if (prev < current) largerMeasurements++
        return current
    }, 0)
    console.log(largerMeasurements - 1)
})()
