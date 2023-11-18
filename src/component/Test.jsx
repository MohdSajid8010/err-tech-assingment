import React, { useEffect } from 'react'

const Test = () => {

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/users', {
    //         method: "POST",
    //         body: JSON.stringify(
    //             {
    //                 email: 'mohdsajid8010@gmail.com',
    //                 username: 'johnd',
    //                 password: 'm38rmF$',
    //                 name: {
    //                     firstname: 'John',
    //                     lastname: 'Doe'
    //                 },
    //                 address: {
    //                     city: 'kilcoole',
    //                     street: '7835 new road',
    //                     number: 3,
    //                     zipcode: '12926-3874',
    //                     geolocation: {
    //                         lat: '-37.3159',
    //                         long: '81.1496'
    //                     }
    //                 },
    //                 phone: '1-570-236-7033'
    //             }
    //         )
    //     })
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch((e) => console.log(e))
    // }, [])

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/users')
    //         .then(res => res.json())
    //         .then(json => console.log(json))

    // }, [])

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products?sort=desc')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // },[])

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/5')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])
    console.log("test")

    return (
        <div>test</div>
    )
}

export default Test