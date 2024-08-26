import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=410ae4b17f944e4d84a09347a991d5e8&page=${this.state.page}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
    }

    handlePrev = async () => {
        if (this.state.page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=410ae4b17f944e4d84a09347a991d5e8&page=${this.state.page - 1}&pagesize=12`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page - 1
            })
        }

    }
    handleNext = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=410ae4b17f944e4d84a09347a991d5e8&page=${this.state.page + 1}&pagesize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }

    render() {
        return (

            <div className="container my-4">

                <h2 className="my-4 text-center">NewSniffer - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://bsmedia.business-standard.com/_media/bs/img/article/2015-05/20/full/1432132627-3458.jpg?im=FeatureCrop,size=(826,465)"} newsUrl={element.url} />
                        </div>

                    })}

                </div>

                <div className="d-flex justify-content-around">
                    <button type="button" class="btn btn-info" disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr; Previous</button>
                    <button type="button" class="btn btn-info" onClick={this.handleNext}>Next &rarr;</button>

                </div>
            </div>

        )
    }
}
