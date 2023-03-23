import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: 'all', sort: 'relevance', query: ''};
        this.array = [];

        this.Update = this.props.updateFunc;
    
        this.handleCategory = this.handleCategory.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleCategory(e) {
        this.setState({category: e.target.value});
    }

    handleSort(e) {
        this.setState({sort: e.target.value})
    }

    handleQuery(e) {
        this.setState({query: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.Update(this.state.query, this.state.category, this.state.sort);
    }
    

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="frm">
            <input className="qry" placeholder="Название книги" onChange={this.handleQuery}></input>
            <div>
                <select value={this.state.category} onChange={this.handleCategory}>
                    <option>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                </select>
                <select value={this.state.sort} onChange={this.handleSort}>
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
            <input className="btn" type="button" onClick={this.handleSubmit} value="Поиск"></input>
            </form>
            </div>
        );
    }
}

export default Form;