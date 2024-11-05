import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditTemplate5 = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [circleImage, setCircleImage] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientAdress, setClientAdress] = useState('');
    const [client, setClient] = useState('');
    const [brand, setBrand] = useState('');
    const [product, setProduct] = useState('');
    const [begindate, setBegindate] = useState('');
    const [business, setBusiness] = useState('');
    const [technical, setTechnical] = useState('');
    const [service, setService] = useState('');
    const [security, setSecurity] = useState('');
    const [solution, setSolution] = useState('');
    const [holderId1, setHolderId1] = useState('');
    const [holderName1, setHolderName1] = useState('');
    const [holderRole1, setHolderRole1] = useState('');
    const [holderId2, setHolderId2] = useState('');
    const [holderName2, setHolderName2] = useState('');
    const [holderRole2, setHolderRole2] = useState('');
    const [holderId3, setHolderId3] = useState('');
    const [holderName3, setHolderName3] = useState('');
    const [holderRole3, setHolderRole3] = useState(''); 
    const [des1, setDes1] = useState('');
    const [des2, setDes2] = useState('');
    const [des3, setDes3] = useState('');
    const [des4, setDes4] = useState('');
    const [des5, setDes5] = useState('');
    const [cost1, setCost1] = useState('');
    const [cost2, setCost2] = useState('');
    const [cost3, setCost3] = useState('');
    const [cost4, setCost4] = useState('');
    const [cost5, setCost5] = useState(''); 
    const [dd1, setDd1] = useState('');
    const [dd2, setDd2] = useState('');
    const [dd3, setDd3] = useState('');
    const [dd4, setDd4] = useState('');
    const [task1, setTask1] = useState('');
    const [task2, setTask2] = useState('');
    const [task3, setTask3] = useState('');
    const [task4, setTask4] = useState('');
    const [owner1, setOwner1] = useState('');
    const [owner2, setOwner2] = useState('');
    const [owner4, setOwner4] = useState('');
    const [owner3, setOwner3] = useState('');
    const [owner, setOwner] = useState('');
    const [ownerSign, setOwnerSign] = useState('');
    const [ownerdate, setOwnerdate] = useState('');
    const [manager, setManager] = useState('');
    const [managerSign, setManagerSign] = useState('');
    const [managerDate, setManagerDate] = useState('');
    const [sponser, setSponser] = useState('');
    const [sponserSign,setSponserSign] = useState('');
    const [sponserDate, setSponserDate] = useState('');
    const [stakeholder, setStakeholder] = useState('');
    const [stakeSign, setStakeSign] = useState('');
    const [stakeDate, setStakeDate] = useState('');
   

   

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/template5', {
            state: {
                title, description, circleImage,
                clientName, clientPhone, clientEmail, clientAdress,
                client, brand, product, begindate,
                business, technical, service, security, solution,
                holderId1, holderName1, holderRole1,
                holderId2, holderName2, holderRole2,
                holderId3, holderName3, holderRole3,
                des1,des2,des3,des4,des5,cost1,cost2,cost3,cost4,cost5,
                dd1,dd2,dd3,dd4,task1,task2,task3,task4,owner1,owner2,owner3,owner4,
                owner, ownerSign, ownerdate,
                manager, managerSign, managerDate,
                sponser, sponserSign, sponserDate,
                stakeholder, stakeSign, stakeDate,
                
            },
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCircleImage(reader.result); // Save base64 image data
            };
            reader.readAsDataURL(file); // Read file as Data URL
        }
    };

    return (
        <div className="container p-5 mx-auto my-10 bg-gray-100 rounded-md shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title and Description */}
                <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Project Information</h2>
                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-gray-600">Title:</label>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-gray-600">Description:</label>
                        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="circleImage" className="text-gray-600">Circle Image:</label>
                        <input type="file" name="circleImage" onChange={handleImageUpload} className="px-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                </div>

                {/* Client Information */}
                <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Client Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="clientName" className="text-gray-600">Client Name:</label>
                            <input type="text" name="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="clientPhone" className="text-gray-600">Client Phone:</label>
                            <input type="tel" name="clientPhone" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="clientEmail" className="text-gray-600">Client Email:</label>
                            <input type="email" name="clientEmail" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="clientAdress" className="text-gray-600">Client Address:</label>
                            <input type="text" name="clientAdress" value={clientAdress} onChange={(e) => setClientAdress(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Project Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="client" className="text-gray-600">Client:</label>
                            <input type="text" name="client" value={client} onChange={(e) => setClient(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="brand" className="text-gray-600">Brand:</label>
                            <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="product" className="text-gray-600">Product:</label>
                            <input type="text" name="product" value={product} onChange={(e) => setProduct(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Goals */}
                <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Goal</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="business" className="text-gray-600">Business:</label>
                            <input type="text" name="business" value={business} onChange={(e) => setBusiness(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="technical" className="text-gray-600">Technical:</label>
                            <input type="text" name="technical" value={technical} onChange={(e) => setTechnical(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="service" className="text-gray-600">Service:</label>
                            <input type="text" name="service" value={service} onChange={(e) => setService(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="security" className="text-gray-600">Security:</label>
                            <input type="text" name="security" value={security} onChange={(e) => setSecurity(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>
                  {/* Stakeholders */}
                  <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Stakeholders</h2>

                    <h2  >Stakeholder 1</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="id1" className="text-gray-600">Holder ID 1</label>
                            <input type="text" name="holderid1" value={holderId1} onChange={(e) => setHolderId1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="name1" className="text-gray-600">Holder Name 1</label>
                            <input type="text" name="name1" value={holderName1} onChange={(e) => setHolderName1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="role1" className="text-gray-600">Role 1</label>
                            <input type="text" name="role" value={holderRole1} onChange={(e) => setHolderRole1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <h2 className='font-[500]'>Stakeholder 2:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="id2" className="text-gray-600">Holder ID 2</label>
                            <input type="text" name="holderid2" value={holderId2} onChange={(e) => setHolderId2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="name2" className="text-gray-600">Holder Name 2</label>
                            <input type="text" name="name2" value={holderName2} onChange={(e) => setHolderName2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                           
                          <div>
                            <label htmlFor="role2" className="text-gray-600">Role 2</label>
                            <input type="text" name="role2" value={holderRole2} onChange={(e) => setHolderRole2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

                     </div>
                     <h2 className='font-[500]'>Stakeholder 3:</h2>

                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="id3" className="text-gray-600">Holder ID 3</label>
                            <input type="text" name="holderid3" value={holderId3} onChange={(e) => setHolderId3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="name3" className="text-gray-600">Holder Name 3</label>
                            <input type="text" name="name3" value={holderName3} onChange={(e) => setHolderName3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                           
                          <div>
                            <label htmlFor="role3" className="text-gray-600">Role 3</label>
                            <input type="text" name="role3" value={holderRole3} onChange={(e) => setHolderRole3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

                     </div>

                </div>

                 {/* Estimated Costs */}
                 <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Estimated Costs</h2>

                    <h2  className='font-[500]'>Enternal Labour:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className='gap-4'>
                            <label htmlFor="des" className="text-gray-600">Description</label>
                            <input type="text" name="des" value={des1} onChange={(e) => setDes1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="cost" className="text-gray-600">Cost</label>
                            <input type="text" name="name1" value={cost1} onChange={(e) => setCost1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                    <h2 className='font-[500]'>External Labour 2:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className='gap-4'>
                            <label htmlFor="des2" className="text-gray-600">Description</label>
                            <input type="text" name="des2" value={des2} onChange={(e) => setDes2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-4'>
                            <label htmlFor="cost2" className="text-gray-600">Cost</label>
                            <input type="text" name="cost2" value={cost2} onChange={(e) => setCost2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

                     </div>

                     <h2 className='font-[500]'>Materials</h2>

                     <div className="grid grid-cols-2 gap-4">
                        <div className='gap-4'>
                            <label htmlFor="des3" className="text-gray-600">Description</label>
                            <input type="text" name="des3" value={des3} onChange={(e) => setDes3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-4'>
                            <label htmlFor="cost3" className="text-gray-600">Cost</label>
                            <input type="text" name="cost3" value={cost3} onChange={(e) => setCost3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                     </div>

                     <h2 className='font-[500]'>Resourses</h2>

                     <div className="grid grid-cols-2 gap-4">
                        <div className='gap-4'>
                            <label htmlFor="des4" className="text-gray-600">Description</label>
                            <input type="text" name="des4" value={des4} onChange={(e) => setDes4(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-4'>
                            <label htmlFor="cost4" className="text-gray-600">Cost</label>
                            <input type="text" name="cost4" value={cost4} onChange={(e) => setCost4(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                     </div>

                     <h2 className='font-[500]'>Others</h2>

                     <div className="grid grid-cols-2 gap-4">
                        <div className='gap-4'>
                            <label htmlFor="des5" className="text-gray-600">Description</label>
                            <input type="text" name="des5" value={des5} onChange={(e) => setDes5(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-4'>
                            <label htmlFor="cost5" className="text-gray-600">Cost</label>
                            <input type="text" name="cost5" value={cost5} onChange={(e) => setCost5(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                     </div>

                </div>


                  {/* Milestones */}
                  <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Milestones</h2>

                    <h2  className='font-[500]'>Project 1:</h2>
                    <div className="flex gap-4 flec-col">
                        <div className='gap-2'>
                            <label htmlFor="dd1" className="text-gray-600">Delivery Date</label>
                            <input type="date" name="dd" value={dd1} onChange={(e) => setDd1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="task1" className="text-gray-600">Task</label>
                            <input type="text" name="taske1" value={task1} onChange={(e) => setTask1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="owner1" className="text-gray-600">Project Owner</label>
                            <input type="text" name="owner1" value={owner1} onChange={(e) => setOwner1(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                    <h2  className='font-[500]'>Project 2:</h2>
                    <div className="flex gap-4 flec-col">
                        <div className='gap-2'>
                            <label htmlFor="dd2" className="text-gray-600">Delivery Date</label>
                            <input type="date" name="dd2" value={dd2} onChange={(e) => setDd2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="task2" className="text-gray-600">Task</label>
                            <input type="text" name="taske2" value={task2} onChange={(e) => setTask2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="owner2" className="text-gray-600">Project Owner</label>
                            <input type="text" name="owner2" value={owner2} onChange={(e) => setOwner2(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                    <h2  className='font-[500]'>Project 3:</h2>
                    <div className="flex gap-4 flec-col">
                        <div className='gap-2'>
                            <label htmlFor="dd3" className="text-gray-600">Delivery Date</label>
                            <input type="date" name="dd3" value={dd3} onChange={(e) => setDd3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="task3" className="text-gray-600">Task</label>
                            <input type="text" name="taske3" value={task3} onChange={(e) => setTask3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="owner3" className="text-gray-600">Project Owner</label>
                            <input type="text" name="owner3" value={owner3} onChange={(e) => setOwner3(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>
                    <h2  className='font-[500]'>Project 4:</h2>
                    <div className="flex gap-4 flec-col">
                        <div className='gap-2'>
                            <label htmlFor="dd4" className="text-gray-600">Delivery Date</label>
                            <input type="date" name="dd4" value={dd4} onChange={(e) => setDd4(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="task4" className="text-gray-600">Task</label>
                            <input type="text" name="taske4" value={task4} onChange={(e) => setTask4(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="owner4" className="text-gray-600">Project Owner</label>
                            <input type="text" name="owner4" value={owner4} onChange={(e) => setOwner4(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                </div>

                 {/* approval and comments */}
                 <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700">Approval and Commments</h2>

                    <h2  className='font-[500]'>Owner:</h2>
                    <div className="flex gap-4">
                        <div className='gap-2'>
                            <label htmlFor="owner" className="text-gray-600">Owner</label>
                            <input type="text" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="ownerSign" className="text-gray-600">Sign</label>
                            <input type="text" name="sign" value={ownerSign} onChange={(e) => setOwnerSign(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="ownerdate" className="text-gray-600">Project Owner</label>
                            <input type="text" name="ownerdate" value={ownerdate} onChange={(e) => setOwnerdate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                    <h2  className='font-[500]'>Sponser:</h2>
                    <div className="flex gap-4">
                        <div className='gap-2'>
                            <label htmlFor="sponser" className="text-gray-600">Sponser</label>
                            <input type="text" name="sponser" value={sponser} onChange={(e) => setSponser(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="sponserSign" className="text-gray-600">Sign</label>
                            <input type="text" name="sponserSign" value={sponserSign} onChange={(e) => setSponserSign(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="sponserDate" className="text-gray-600">Date</label>
                            <input type="text" name="sponserDate" value={sponserDate} onChange={(e) => setSponserDate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>

                    <h2  className='font-[500]'>Manager:</h2>
                    <div className="flex gap-4">
                        <div className='gap-2'>
                            <label htmlFor="manager" className="text-gray-600">Manager</label>
                            <input type="text" name="manager" value={manager} onChange={(e) => setManager(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="managerSign" className="text-gray-600">Sign</label>
                            <input type="text" name="managerSign" value={managerSign} onChange={(e) => setManagerSign(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="managerDate" className="text-gray-600">Date</label>
                            <input type="text" name="managerDate" value={managerDate} onChange={(e) => setManagerDate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                    </div>
                    <h2  className='font-[500]'>Stakeholder:</h2>
                    <div className="flex gap-4 flec-col">
                        <div className='gap-2'>
                            <label htmlFor="stakeholder" className="text-gray-600">Stakeholder</label>
                            <input type="text" name="stakeholder" value={stakeholder} onChange={(e) => setStakeholder(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="stakeholderSign" className="text-gray-600">Sign</label>
                            <input type="text" name="stakeholderSign" value={stakeSign} onChange={(e) => setStakeSign(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className='gap-2'>
                            <label htmlFor="stakeDate" className="text-gray-600">Date</label>
                            <input type="text" name="stakeDate" value={stakeDate} onChange={(e) => setStakeDate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        
                        
                    </div>

                </div>


                {/* Submit Button */}
                <div className="text-right">
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md bg-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTemplate5;
