import React, {Component} from "react";

class Admin extends Component{
    // constructor(props) {
    //     super(props);
    //     this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    //     this.onChangeCategoryNumber = this.onChangeCategoryNumber.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    //
    //     this.state = {
    //         category_name: '',
    //         category_number: ''
    //     }
    // }
    //
    // onChangeCategoryName(e){
    //     this.setState({
    //         category_name: e.target.value
    //     });
    // }
    //
    // onChangeCategoryNumber(e){
    //     this.setState({
    //         category_number: e.target.value
    //     });
    // }
    //
    // onSubmit(e){
    //     e.preventDefault();
    //   const obj = {
    //       category_name: this.state.category_name,
    //       category_number: this.state.category_number
    //   };
    //   axios.post('http://localhost:4000/category/add',obj).then(res => console.log(res.data));
    //
    //   this.setState({
    //       category_name: '',
    //       category_number: ''
    //   })
    // }
    render() {
        return(
            <a className="btn btn-primary" href="./AddCategory" role="button">New Category</a>
        )
    }
}
export default Admin;
