import React from 'react'

const Profile = () => {
  return (
    <section id="features" className="row w-100 bg-light py-0">
      <div className></div>
      <div className="col-lg-6 col-img py-5">
      </div>
      <div className="col-lg-6">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 pt-4">
              <h5 className="text-danger">Name</h5>
              <h1>rai</h1>
              <p>
                工業高校で資格取得に力を入れながら自主的にITを学び工業高校卒業後,基本情報技術者を取得した人のみが入学できる、IT専門学校に進学、学校の授業では、基礎を勉強しつつ、自主開発としいてweb開発の勉強をしています。
              </p>
            </div>
            <div className="col-md-10 offset-md-1 pt-4">
              <h5>所有資格</h5>
              <p>2017 6月 計算技術検定 3級</p>
              <p>2018 3月 危険物取扱者乙種　4類</p>
              <p>2018 10月 基礎製図検定</p>
              <p>2019 3月 情報技術検定　2級</p>
              <p>2021 6月 基本情報技術者</p>
            </div>
          </div>
        
        <div className='col-md-10 offset-md-1 pt-6 other'>
          <h5>趣味・特技</h5>
          <p>
          web技術に関する勉強(プログラミング)
          </p>
          <p>スポーツ(サッカー)</p>
        </div>
      </div>
    </div>
  </section >
  )
}

export default Profile