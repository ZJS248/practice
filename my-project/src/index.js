import Head from '/template/head.js';
import Form from '/template/form.js'
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Head/>
                <Form/>
            </React.Fragment>
        )
    }
}
ReactDOM.render(
    <Index/>,
    document.getElementById('main')
)
