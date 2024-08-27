import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HPRightSide() {
    const navigate = useNavigate();
    const state = useSelector((state) => { return state })

    return (
        <div className="outer outerright float-left rounded-3xl bg-white border-gray-500 border-solid">
        <div className='dot dotright'>
          <div className='dotrighttextcontainer'>
            <p id="blogtitle" onClick={() => { navigate('/') }}>Trust.</p>
            <span id="blogurl">https://cyblog.fly.dev</span>
          </div>

          {
            <div>
              <div className='post-it post-it-top'>
                <button className={`${state.page.page === 0 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/'); }}>홈</button>
                <button className={`${state.page.page === 1 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/profile'); }}>프로필</button>
                <button className={`${state.page.page === 2 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/note/all'); }}>블로그</button>
                <button className={`${state.page.page === 3 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/guestbook'); }}>방명록</button>
                <button className={`${state.page.page === 4 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/writenotes'); }}>글쓰기</button>
                <div className='post-it-space' />

                {
                  state.isLoggedIn === false
                    ? <button className={`${state.page.page === 5 ? 'post-it-selected' : ''} `} onClick={() => { navigate('/login'); }}>로그인</button>
                    : <button className={`${state.page.page === 5 ? 'post-it-selected' : ''} `} onClick={() => { navigate('/mypage'); }}>MyPage</button>
                }

                <button className={`${state.page.page === 6 ? 'post-it-selected' : ''}`} onClick={() => { navigate('/chatting'); }}>채팅방</button>
              </div>
            </div>
          }
          <div className='content content-right'>

            {/* <Suspense fallback={<LoadingRight />}>
              <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/profile' element={<Profile />} />
                <Route path='/calander' element={<Calander />} />

                <Route path='/note/all' element={<Allnotes />} />
                <Route path='/note/:id' element={<Notes user={userdata.name} />} />
                <Route path='/note' element={<Navigate replace to="/note/all" />} />

                <Route path='/guestbook' element={<Sayhello user={userdata.name} />} />
                {
                  state.isLoggedIn === true
                    ? <Route path='/writenotes' element={<Writenotes user={userdata.name} />} />
                    : <Route path='/writenotes' element={<div>글쓰기는 가입자만 이용 가능합니다.</div>} />
                }
                {
                  state.isLoggedIn === true
                    ? <Route path='/login' element={<Navigate replace to="/mypage" />} />
                    : <Route path='/login' element={<Login />} />
                }
                <Route path='/fail' element={<div> 로그인 오류! <br /> 다시 시도해주시기 바랍니다.</div>} />
                <Route path='/join' element={<Join />} />
                <Route path='/mypage' element={<MyPage />} />

                <Route path='/chatting' element={<Chatting />} />

                <Route path='/likey' element={<Main />} />

                <Route path='*' element={<h1 className='error-404'>Error : 404</h1>} />
              </Routes>
            </Suspense> */}
          </div>
        </div>
      </div>
    )

}

export default HPRightSide;