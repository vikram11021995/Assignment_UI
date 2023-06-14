import React from "react";
import "./Home.css";

import Rectangle63 from "../src/Assets/5b9279582db2a92beb8db29fa1512ee9 (1).jpg";
import Like from "../src/Assets/Header/Vector.png";
import Comment from "../src/Assets/Header/talke/Vector.png";
import Share from "../src/Assets/Header/bookmark/Vector.png";
import MaskGroup from "../src/Assets/Header/Group 26086686.png";
import ExpertIcon from "../src/Assets/Header/EXPERT_ICON.png";
import OtherIcon from "../src/Assets/Header/Group 26086629.png";
import imagesmode from "../src/Assets/Header/imagesmode.png";
import GroupAvatar from "../src/Assets/Header/Group 26086686.png";


  const Home = () => {
    return (
      <>
        <div className='container'>
          <div className='header header-notifications'>
            <div className='prev-align'>
              <a className='icon icon__previous'></a>
            </div>
            <div className='korean-text'>자유톡</div>
            <div>
              <i className='fa fa-bell'></i>
            </div>
          </div>

          <div className='avtar_btn'>
            <div className='grp-avtar-icons'>
              <div>
                <img
                  src={GroupAvatar}
                  className='groupPic groupPicss'
                  alt='groupPic'
                  width='100%'
                />
              </div>

              <div>
                <div>
                  안녕 나 응애{" "}
                  <img
                    src={ExpertIcon}
                    alt='expert_icon'
                    className='masksgp11'
                  />
                  1일전
                </div>
                <div>65cm . 53kg</div>
              </div>
            </div>
            <div>
              <button className='button rounded-corners button-add button-add8'>
                {" "}
                팔로우
              </button>
            </div>
          </div>

          <div className='main-content'>
            <h2 className='heading_content'>
              지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
            </h2>
            <p className='content_para'>
              지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
              혹시 어떤 상품이 제일 괜찮았어? 후기 올라오는거 보면 로우라이즈?
              그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? 올해
              로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
              사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
              팝들 있으면 어땠는지 후기 좀 공유해주라~~!
            </p>

            <p className='content_paraone'>
              지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
              혹시 어떤 상품이 제일 괜찮았어?
              <br />
              <br /> 후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그
              테이블이 제일 재밌었다던데 맞아??? <br />
              <br />
              올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
              아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
              있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
            </p>
          </div>

          <div>
            <button className='button rounded-corners button-add button-addR'>
              {" "}
              #2023
            </button>
            <button className='button rounded-corners button-add button-addR'>
              #TODAYISMONDAY
            </button>
            <button className='button rounded-corners button-add button-addR'>
              #TOP
            </button>
            <button className='button rounded-corners button-add'>
              #POPS!
            </button>
            <button className='button rounded-corners button-add button-addrow button-addR'>
              #WOW!
            </button>
            <button className='button rounded-corners button-add button-adrow'>
              #ROW!
            </button>
          </div>

          <div className='imgTop'>
            <img src={Rectangle63} className='homePic' alt='homePic' />
          </div>

          <div className='like_comment'>
            <div className='horiz-align'>
              <div>
                <img
                  src={Like}
                  className='likePic'
                  alt='LikePic'
                  width='100%'
                />
              </div>
              <div className='total_likes'>5</div>
            </div>
            <div className='left_spacing'>
              <div>
                <img
                  src={Comment}
                  className='commentPic'
                  alt='homePic'
                  width='100%'
                />
              </div>
              <div className='total_comments'>5</div>
            </div>
            <div className='left_spacing'>
              <img
                src={Share}
                className='sharePic'
                alt='sharePic'
                width='100%'
              />
              <div className='total_share'>5</div>
            </div>

            <div className='dots'>...</div>
          </div>

          <div className='peoples_review'>
            <div className='mask_grp1'>
              <img src={MaskGroup} alt='mask_grp' className='masksgp' />
            </div>

            <div className='main-div'>
              <div className='customers-review'>
                <div>
                  안녕 나 응애{" "}
                  <img
                    src={ExpertIcon}
                    alt='expert_icon'
                    className='masksgp1'
                  />
                  1일전
                </div>
                <div className='korean_content'>
                  {/* <p> */}
                  어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                  우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                  아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                  괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
                  봐주세용~!
                  {/* </p> */}
                  <div>
                    <div className='likeCommentSection'>
                      <div className='horiz-align'>
                        <div>
                          <img
                            src={Like}
                            className='likePic'
                            alt='LikePic'
                            width='100%'
                          />
                        </div>
                        <div className='total_likes'>5</div>
                      </div>
                      <div className='left_spacing'>
                        <div>
                          <img
                            src={Comment}
                            className='commentPic'
                            alt='homePic'
                            width='100%'
                          />
                        </div>
                        <div className='total_comments'>5</div>
                      </div>
                    </div>
                    <div className='ownerReplies'>
                      <div className='likeforlike'>
                        <img
                          src={OtherIcon}
                          className='likePic'
                          alt='LikePic'
                          width='100%'
                        />
                      </div>

                      <div>
                        <div>
                          <b>ㅇㅅㅇ</b>1일전
                        </div>

                        <div>
                          <div>
                            오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                          </div>

                          <div className='onlyLikeIcon'>
                            <div>
                              <img
                                src={Like}
                                className='likePic'
                                alt='LikePic'
                                width='100%'
                              />
                            </div>
                            <div className='total_likes'>5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>...</div>
            </div>
          </div>

          <div className='imageMode'>
            <div>
              <form
                class='example'
                action='/action_page.php'
                style={{ margin: "auto" }}
              >
                <input
                  type='text'
                  placeholder='댓글을 남겨주세요.'
                  name='search2'
                />
                <button type='submit' className='btn-submission'>
                  등록
                </button>
              </form>
            </div>
          </div>

          {/* <div className='peoples_review'>
            <div className='mask_grp1'>
              <img src={MaskGroup} alt='mask_grp' className='masksgp' />

              <div className="customers-review">
                <div>
                  안녕 나 응애{" "}
                  <img
                    src={ExpertIcon}
                    alt='expert_icon'
                    className='masksgp1'
                  />
                  1일전
                </div>
                <div>
                    어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                    우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                    아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                    괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
                    봐주세용~!
                </div>
              </div>
            </div>
            <div>...</div>
          </div> */}
        </div>
      </>
    );
  }

export default Home;
