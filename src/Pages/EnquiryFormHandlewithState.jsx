import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header'




export default function Contact() {

    // Enquiry form handle with state using controled components


    let [formData, setformData] = useState({

        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: ''


    })

    let [userData, setuserData] = useState([])

    let changeData = (event) => {

        let oldData = { ...formData };
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setformData(oldData);

    }


    let handleSubmit = (event) => {

        let currentUserFormData = {
            uname: formData.uname,
            uemail: formData.uemail,
            uphone: formData.uphone,
            umessage: formData.umessage,

        }

        // Email or Phone no already exist


        let checkFilterUser = userData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone);

        if (formData.index === "") {

            if (checkFilterUser.length == 1) {

                alert("Email or Phone already exist........");
            } else {

                let allUserData = [...userData, currentUserFormData];
                setuserData(allUserData);
                setformData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: ''
                })

            }
        } else {

            let editIndex = formData.index;
            let oldData = userData;

            let checkFilterUser = userData.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i != editIndex);

            if (checkFilterUser.length == 0) {



                oldData[editIndex]["uname"] = formData.uname;
                oldData[editIndex]["uemail"] = formData.uemail;
                oldData[editIndex]["uphone"] = formData.uphone;
                oldData[editIndex]["umessage"] = formData.umessage;
                setuserData(oldData)
                setformData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: ''
                })
            } else {
                alert("Email or Phone already exist........");

            }
        }



        event.preventDefault();
    }

    // Delete Row in User Data State


    let deleteRow = (index) => {
        let filterDataAfterDelete = userData.filter((v, i) => i != index)
        setuserData(filterDataAfterDelete);
    }


    // Update Row in User Data State



    let editRow = (index) => {

        let editData = userData.filter((v, i) => i == index)[0];
        editData['index'] = index;
        setformData(editData);

    }


    return (
        <div><h1>CONTACT PAGE</h1>


            <Header></Header>

            <form onSubmit={handleSubmit}>
                {userData.length}
                <br></br>

                <label>Name</label>
                <input type="text" name='uname' value={formData.uname} onChange={changeData} />
                <br />
                <br />

                <label>Email</label>
                <input type="text" name='uemail' value={formData.uemail} onChange={changeData} />
                <br />
                <br />


                <label>Phone</label>
                <input type="text" name='uphone' value={formData.uphone} onChange={changeData} />
                <br />
                <br />


                <label>Message</label>
                <textarea name="umessage" rows="3" value={formData.umessage} onChange={changeData} ></textarea>
                <br />
                <br />
                <button>{formData.index !== "" ? 'Update' : 'save'}</button>


            </form>

            {/* // Show User Data form State in Table Tags */}


            <table border={1} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {userData.length >= 1 ?

                        userData.map((obj, i) => {
                            return (

                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{obj.uname}</td>
                                    <td>{obj.uemail}</td>
                                    <td>{obj.uphone}</td>
                                    <td>{obj.umessage}</td>
                                    <td>
                                        <button onClick={() => deleteRow(i)}>Delete</button>
                                        <button onClick={() => editRow(i)}>Update</button>
                                    </td>
                                </tr>

                            )
                        })

                        :

                        <tr>
                            <td colSpan={6}> Data not fount</td>
                        </tr>



                    }

                </tbody>
            </table>







        </div>
    )
}
