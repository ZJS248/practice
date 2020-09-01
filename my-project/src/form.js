function Form() {
    var state={
        email:'email@example.com',
        password:'123456中文',
    }
    var change=(event)=>{
        console.log(event.target);
        console.log(event.target.value);
        var name=event.target.name;
        state[name]=event.target.value;
    }
    return (
        <div style={{margin:'10% auto',width: '50%'}}>
            <form action="submit" name="FormData" method="POST" encType="multipart/form-data">
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" id="email" value={state.email} onChange={change.bind(this)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="password" id="password" value={state.password} onChange={change.bind(this)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">文件</label>
                    <div className="col-sm-10">
                        <input type="file" className="form-control" name="image" id="image" />
                    </div>
                </div>
                <div className="form-group row">
                    <div >
                        <input type="submit" className="btn btn-primary mb-2" value="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form;