import React, { useEffect, useState } from 'react'
import { createUser, getUser, updateUser } from '../services/UserService'
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[birthday, setBirthday] = useState('')
    const[email, setEmail] = useState('')

    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if(id) {
            getUser(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setBirthday(response.data.birthday);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    function saveOrdUpdateUser(e){
        e.preventDefault();

        if(validateForm()) {

            const user = {firstName, lastName, birthday, email}
            console.log(user)

            if(id) {
                updateUser(id, user).then((response) => {
                    console.log(response.data);
                    navigator('/users');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createUser(user).then((response) => {
                    console.log(response.data);
                    navigator('/users')
                }).catch(error => {
                    console.error(error);
                })
                
            }
            
        }
        
    }


    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';

        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';

        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(birthday.trim()){
            errorsCopy.birthday = '';

        } else {
            errorsCopy.birthday = 'Birthday date is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';

        } else {
            errorsCopy.email = 'Email address is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if(id){
            return <h2 className='text-center'>Update User</h2>
        } else {
            return <h2 className='text-center'>Add User</h2>
        }
    }

  return (
    <div className='container'>
        <br>
        </br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                placeholder='Enter User First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                            { errors.firstName && <div className='invalid-feedback'>{ errors.firstName} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Enter User Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            { errors.lastName && <div className='invalid-feedback'>{ errors.lastName} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Birthday:</label>
                            <input
                                type='date'
                                placeholder='Enter User Birthday'
                                name='birthday'
                                value={birthday}
                                className={`form-control ${ errors.birthday ? 'is-invalid' : ''}`}
                                onChange={(e) => setBirthday(e.target.value)}
                            >
                            </input>
                            { errors.birthday && <div className='invalid-feedback'>{ errors.birthday} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter User Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'>{ errors.email} </div> }
                        </div>

                        <button className='btn btn-success' onClick={saveOrdUpdateUser}>Submit</button>

                    </form>

                </div>

            </div>

        </div>


    </div>
  )
}

export default UserComponent