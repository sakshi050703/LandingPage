import React, { useEffect, useRef, useState } from 'react'
import '../Assets/Home.css'
import twitch from '../Static/Vector.png'
import google from '../Static/Google.png'
import facebook from '../Static/facebook.png'
import youtube from '../Static/youtube.png'
import pintrest from '../Static/pintrest.png'
import cardlogo1 from '../Static/Group1.png'
import cardlogo2 from '../Static/cardlogo2.png'
import cardlogo3 from '../Static/cardlogo3.png'
import cardlogo4 from '../Static/Black.png'
import grilimg from '../Static/girlimg.jpg'
import uncover from '../Static/uncover.jpg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import SuccessModal from './SuccessModal'
const Home = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const modalRef = useRef(null);

  const addData = async (data, event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:9000/users', data);
      reset();

      if (modalRef.current) {
        const bootstrapModal = window.bootstrap.Modal.getInstance(modalRef.current);
        bootstrapModal.hide();
      }

      setTimeout(() => setShowSuccessModal(true), 500);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(() => setShowSuccessModal(false), 1000);
    }
  }, [showSuccessModal]);

  const [user, setUser] = useState([])
  const getdata = async () => {
    const response = await axios.get('http://localhost:9000/users')
    const result = response.data
    setUser(result)
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className=''>
      <div className='main-content'>
        <div className=''>
          <div className='heading'>
            <h1>Simplify Your Life with Our Todo App</h1>
          </div>
          <div className='heading'>
            <p className='info'>Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.</p>
          </div>
          <div className='button'>
            <button type="button" className="btn2 rounded-5  getstarted" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Get Started
            </button>

            <form onSubmit={handleSubmit(addData)}>

              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">

                    <div className="modal-header border-0 ps-0">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Get Started Today!</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>

                    </div>

                    <div className="modal-body p-0 text-start">
                      <p>Fill in your details and take control of your tasks.</p>


                      <div className=" d-flex name-detail">
                        <div className='from-detail'>
                          <label className="form-label">First Name</label>
                          <input type="text" className='input' placeholder="Enter your first name" {...register('fname', { required: " required" })} />
                          {errors.fname && <span className="text-danger">{errors.fname.message}</span>}

                        </div>
                        <div>
                          <label className="form-label lastname">Last Name</label>
                          <input type="text" className='input' placeholder="Enter your last name" {...register('lname', { required: "required" })} />
                          {errors.fname && <span className="text-danger">{errors.lname.message}</span>}

                        </div>
                      </div>

                    </div>
                    <div className=''>
                      <div className="d-flex gap-3 align-items-center">
                        <label className="form-label">Gender</label>
                        <div className='language'>
                          <input type="radio" id="male" name="gender" value="male" {...register('gender')} />
                          <label htmlFor="male">Male</label>
                        </div>
                        <div className='language'>
                          <input type="radio" id="female" name="gender" value="female" {...register('gender')} />
                          <label htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" id='language'>Language</label>
                      <div className='language'>
                        <input type="checkbox" id="english" name="language" value='english' {...register('language')} />
                        <label htmlFor="english">English</label>
                      </div>
                      <div className='language'>
                        <input type="checkbox" id="hindi" name="language" value='hindi'{...register('language')} />
                        <label htmlFor="hindi">Hindi</label>
                      </div>
                      <div className='language'>

                        <input type="checkbox" id="marathi" name="language" value='marathi'{...register('language')} />
                        <label htmlFor="marathi">Marathi</label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control input w-100" id="email" placeholder="Enter your email address" {...register('email')} />
                    </div>

                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="terms" />
                      <label className="form-check-label" htmlFor="terms">I agree to the <a href="#">terms and conditions</a></label>
                    </div>

                    <div className="modal-footer border-0">

                      <button
                        className="btn btn-danger w-100"
                        type="submit"
                      >
                        Submit
                      </button>

                      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

                    </div>
                  </div>
                </div>
              </div>

            </form>

            <button className='btn1 rounded-5 learn btn-gap'>Learn more</button>
          </div>
          <div className='container organize '>
            <div className='main-info'>
              <div className='content'>
                <div className='info'>
                  <p className='content-info light'>Organize.</p>
                  <p className='content-info'>Achieve.</p>
                  <p className='content-info'>Relax.</p>
                </div>
                <div>
                  <p className='para'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
                </div>
                <div className='buttons'>
                  <button className='button1'>Get Started Today</button>
                  <button className='button2'>Discover Features</button>
                </div>
              </div>


            </div>
            <div className='social-media d-flex justify-content-between'>
              <div className='group'>
                <img src={google} alt='google' />
              </div>
              <div className='group'>
                <img src={facebook} alt='facebook' />
              </div>
              <div className='group'>
                <img src={youtube} alt='youtube' />
              </div>
              <div className='group'>
                <img src={pintrest} alt='pintrest' />
              </div>
              <div className='group'>
                <img src={twitch} alt='twitch' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='transform'>
        <h4 className='transform-card'>Transform Your Productivity with Our Innovative To-Do List Features</h4>
        <div className='container d-flex justify-content-around'>
          <div className='cards'>
            <div>
              <div className='card1'>
                <div className='img'>
                  <img src={cardlogo1} alt='' className='im' />
                </div>
                <h3 className='number'>01</h3>
              </div>
              <h5 className='user'>User-Friendly Interface</h5>
              <div className='lines'>
                <p className='line'></p>
                <p className='line2'></p>
              </div>
              <p className='text-start card-info'>Our platform offers seamless task management to boost your efficiency.</p>
            </div>
          </div>
          <div className='cards'>
            <div>
              <div className='card1'>
                <div className='img'>
                  <img src={cardlogo2} alt='' className='im' />
                </div>
                <h3 className='number'>02</h3>
              </div>
              <h5 className='user user2'>Collaborate & Share Effortlessly</h5>
              <div className='lines'>
                <p className='line'></p>
                <p className='line2'></p>
              </div>
              <p className='text-start card-info'>Invite team members to work together and achieve your goals faster.</p>
            </div>
          </div>
          <div className='cards'>
            <div>
              <div className='card1'>
                <div className='img'>
                  <img src={cardlogo3} alt='' className='im' />
                </div>
                <h3 className='number'>03</h3>
              </div>
              <h5 className='user'>Effortless Collaboration</h5>
              <div className='lines'>
                <p className='line'></p>
                <p className='line2'></p>
              </div>
              <p className='text-start card-info'>Invite team members to work together and achieve your goals faster.</p>
            </div>
          </div>
          <div className='cards'>
            <div className=''>
              <div className='card1'>
                <div className='img'>
                  <img src={cardlogo4} alt='' className='im' />
                </div>
                <h3 className='number'>04</h3>
              </div>
              <h5 className='user'> Seamless Access</h5>
              <div className='lines'>
                <p className='line'></p>
                <p className='line2'></p>
              </div>
              <p className='text-start card-info'>Stay connected and manage your tasks on the go with ease.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container Customer'>
        <div>
          <div className=''>
            <h3 className='cust'>Customer Testimonials</h3>
            <p className='tool'>This tool has transformed my productivity and organization!</p>
          </div>
          <div className='boxes '>
            <div className='box1'></div>
            <div className='box2'>
              <div className='box-content'>
                <h3 className='box-heading'>Using this website has made my tasks so much easier! I can't imagine my day without it."</h3>
                <div className='box-content1'>
                  <div className='box-content-2'>
                    <p className='line3'></p>
                  </div>

                  <div className='customer-detail'>
                    <p className='m-0'>Sherri Cronin</p>
                    <p>Project Manager, TechCorp</p>
                  </div>


                </div>
                <div className='d-flex'>
                  <div className='previous'> &lt;</div>
                  <div className='next'>&gt;</div>
                </div>
              </div>
              <div className='box-img'>
                <div className='image'>
                  <img src={grilimg} className='girlimg' alt='girl img' />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        <div className=' uncovers'>
          <div className='uncover '>
            <img src={uncover} alt='mobile img' />
          </div>
          <div className='uncover-content'>
            <div className='un-content text-start'>
              <h3 className='cust2'>Start Organizing Your Life Today</h3>
              <p className='uncover-para'>Join us now and transform your productivity with our intuitive to-do list platform!</p>
              <div className='unvover-buttons d-flex'>
                <button className='uncover-button1'>Sign Up</button>
                <button className='uncover-button2'>Learn more</button>
              </div>
            </div>

          </div>

        </div>



      </div>
      <table className=' container mt-5'>
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{u.fname} {u.lname}</td>
                  <td>{u.gender}</td>
                  <td>{Array.isArray(u.language) ? u.language.join(", ") : "N/A"}</td>
                  <td>{u.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home;
