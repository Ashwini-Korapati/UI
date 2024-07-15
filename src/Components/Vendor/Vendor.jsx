import React from 'react'
import "./Vendor.css"
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';



const Vendor = () => {
    return (
        <div className='vendor-form-main'>
            <form action="" className='vendor-form'>
                <div className='vendor-div'>
                    <h1>Vendor Form </h1>
                    <div className='input-fields'>
                        <InputText type="text" placeholder="Full Name"  className='input-field'/>
                        <InputText type="text" placeholder="Company Name" className='input-field'/>
                    </div>
                    <div className='input-fields'>
                        <InputText type="text" placeholder="Phone Number" className='input-field'/>
                        <InputText type="text" placeholder="Service" className='input-field' />
                    </div>
                    <div className='input-fields'>
                        <InputText type="text" placeholder="Email Id"className='input-field1'/>

                    </div>
                    <div className='input-fields'>
                        <InputText type="text" placeholder="Address" className='input-field1'/>

                    </div>
                    <div className='input-fields'>
                        <InputText type="text" placeholder="Experience in Years" className='input-field1'/>

                    </div>
                    <div className='input-fields'>
                        <InputTextarea type="text" placeholder='Add Comment...' rows={5} cols={30} className='input-field2'/>
                    </div>
                    <div>
                       <Button label="Submit" className='sub-button'/>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default Vendor
