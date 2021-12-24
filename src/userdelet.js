onSubmit: async values => {
    //   alert(JSON.stringify(values,null,2))
    try {
        await fetch(`https://61974899af46280017e7e4ed.mockapi.io/surveyform/${params.id}`, {
            method: "DELET",
            body: JSON.stringify(values),
            headers: {
                "content-type": "application/json"
            }
        })
        
    } catch (error) {
        console.log(error)

    }
}
useEffect(async () => {
try {
    let userData = await fetch(`https://61974899af46280017e7e4ed.mockapi.io/surveyform/${params.id}`)
    let user = await userData.json()
    formik.setValues(user)
} catch (error) {
    console.log(error)
}
})