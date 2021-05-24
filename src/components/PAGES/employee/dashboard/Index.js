import React, {useState} from 'react'
import Layout from './../../../layout/employee/Layout';
import Title from './../../../PageTitle/Title'
import ReactDataTable from './subs/table/ReactDataTable';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
// 
function Index({profile}) {

   

    const [tab,setTab] = useState(0);
    const activeClass= (num)=>{
        const act = classnames({
            'active-tab-ba':tab===num
        })
        return act
    }
    const handleSwitchTabs = ()=>{
        switch (tab) {
            case 0:
                return <Birthdays />
            case 1:
                return <Anniversary />
            default:
                return <Birthdays />;
        }
    }
    const Birthdays = ()=>{
        return(
            <div>
                 <ul>
                            <li>Lagunju <span>1 May 2021</span></li>
                        </ul>
            </div>
        )
    }
    const Anniversary = ()=>{
        return(
            <div>
                 <ul>
                            <li>Jubilee <span>1 May 2021</span></li>
             </ul>
            </div>
        )
    }
    return (
        <>
        <Layout>
        <div>
            <Title title="Dashboard"/>
            <div>Welcome {profile.lastName}</div>
            <div className='row'>
                <div className='col-lg-8'>
                <ReactDataTable />
                </div>
                <div className='col-lg-4'>
                        <p>This month Attendance</p>
                        <div className='card mb-4'>
                            <div className='d-flex align-items-end'>
                            <h1 className='m-0 p-0 mr-2'>15</h1> days present
                            </div>
                        </div>
                        <div className='card'>
                        <div className='d-flex align-items-end'>
                            <h1 className='m-0 p-0 mr-2'>2</h1> days absent
                            </div>
                        </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='col-lg-5 mr-lg-auto'>
                    <div className='bar-card'>
                        <div className='bar'>
                        <h6>Upcoming Holidays</h6><Link to='#'>view all</Link>
                        </div>
                    <div className='card'>
                        <ul>
                            <li>Labour Holiday <span>1 May 2021</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='bar-card switch-bars'>
                        <div className='bar switchable'>
                        <h6 onClick={()=>setTab(0)} className={activeClass(0)}>Birthdays</h6><h6 className={activeClass(1)} onClick={()=>setTab(1)}>Anniversary</h6>
                        </div>
                    <div className='card'>
                        {handleSwitchTabs()}
                    </div>
                    </div>
                </div>

            </div>
        </div>
        </Layout>
        </>
    )
}

const mapStateToProps = (state)=>{

    return{
      profile:state.employee
    }
  }
  
  export default connect(mapStateToProps)(Index)
