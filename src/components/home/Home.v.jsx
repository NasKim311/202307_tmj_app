import React from "react";

const HomeV = ({state}) => (
    <>

    <div className="main-cover">
        <div className="title-box">
            <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/img/mizalee.png`} /></div>
            <div className="sentence"></div>
            <div className="subTitle">{state.subTitle}</div>
        </div>

        <div className="visited-container">
            <div className="title">
                <span>qweqweqwe </span>
                <div className="sub">asdasdasd</div>
            </div>
        </div>

        <div className="">

            {/* <ul className="js-filter uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center cards filter-list-cards uk-grid" uk-grid="">
                <li className="uk-first-column">
                    <a href="/mytheme/884">
                        <div className="card filter-list-card border-radius shadow">
                            <div className="icon">🍽</div>
                            <div className="sentence card-sentence">서울 끝자락 거여/마천의 보물맛집!</div>
                            <div className="curators">
                                <span className="curator">️ 박미지s</span>
                                <span className="divider">|</span>
                                <span>8개의 장소</span>
                            </div>
                            
                        </div>
                    </a>
                </li>
            </ul> */}

            <div className="header">
                <div>
                    <div className="title relative">최근 만들어진 테마지도</div>
                    <div className="title sub-title relative">취향 가득한 큐레이터를 기다리고 있는 테마들입니다.</div>
                </div>
			
				<a href="/curation/theme/create" className="ghost-button">+ 테마지도 만들기</a>
			
	    	</div>

            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-primary">
                        <div className="card-header">
                            <h3 className="card-title">Primary</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">The body of the card</div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-success">
                        <div className="card-header">
                            <h3 className="card-title">Success</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">The body of the card</div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-warning">
                        <div className="card-header">
                            <h3 className="card-title">Warning</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">The body of the card</div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-danger">
                        <div className="card-header">
                            <h3 className="card-title">Danger</h3>
                        </div>
                        <div className="card-body">The body of the card</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    </>

);

export default HomeV