import React from 'react';

// image
import TheMatJip_logo from '../../assets/img/cow.png';

const LoginV = ({state , signIn , handleChange}) => (

    <form onSubmit={signIn}>

        <div className="login-box ">
            <div className="login-logo">
                <b>The MatJip <img src={TheMatJip_logo} alt='TheMatJip_logo' /></b>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={handleChange} placeholder="Email" name="username"  value={state.username} />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" onChange={handleChange} placeholder="Password"  name="password"   value={state.password} />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="icheck-primary">
                            <input type="checkbox" name="isRememberMe" onChange={handleChange} checked={state.isRememberMe} />
                            <label htmlFor="isRememberMe"> 자동로그인 </label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        
                        <div className="col-8">
                            <div className="icheck-primary">
                            <input type="checkbox" name="isSaveId" onChange={handleChange} checked={state.isSaveId} />
                            <label htmlFor="isSaveId"> 아이디저장 </label>
                            </div>
                        </div>

                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
             
                </div>
            </div>
        </div>

    </form>

);

export default LoginV;