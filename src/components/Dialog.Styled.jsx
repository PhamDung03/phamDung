import styled from "styled-components";

const StyledDialog = styled.div`
  position: fixed;
  background-color: rgba(128, 128, 128, 0.6);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  .wrapper {
    width: calc(100vw - 64px);
    height: calc(100vh - 64px);
    padding: 32px;
    display: flex;
    align-items: center;
    .content_box {
      background-color: white;
      margin: 0 auto;
      padding: 24px;
      width: calc(100% - 48px);
      height: fit-content;
      max-width: 520px;
      max-height: 640px;
      border-radius: 8px;
      .content_box_title {
        font-weight: bold;
        font-size: 24px;
        border-bottom: 1px solid #ddd;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        span {
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span:hover {
          background-color: #ebebeb;
          border-radius: 8px;
        }
      }

      .content_box_footer {
        /* margin-top: 16px; */
        border-top: 1px solid #ddd;
        padding: 16px 8px 0 8px;
        text-align: right;
      }
    }
  }
`;

export default StyledDialog;
