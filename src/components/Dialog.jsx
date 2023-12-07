import Button from "./Button";
import StyledDialog from "./Dialog.Styled";
import { AiOutlineClose } from "react-icons/ai";

const Dialog = (props) => {
  const {
    children,
    title = "Title",
    footer,
    onClose = () => null,
    onComfirm = () => null,
    showFooter = false,
    showFooterDelete = false,
    showComfrimEdit = false,
    onClick,
  } = props;

  return (
    <StyledDialog>
      <div className="wrapper">
        <div className="content_box">
          {/* title */}
          <div className="content_box_title">
            {title}
            <span onClick={onClose}>
              <AiOutlineClose />
            </span>
          </div>

          {children}

          {showComfrimEdit && (
            <div>
              <Button
                textBg="#4FA352"
                text="Comfrim"
                margin="8px"
                onClick={onComfirm}
              />
              <Button textBg="#5572C7" text="Reset" />
            </div>
          )}

          {showFooter && (
            <div className="content_box_footer">
              <Button textBg="red" text="Close" onClick={onClick} />
              {footer}
            </div>
          )}

          {showFooterDelete && (
            <div className="content_box_footer">
              <Button
                textBg="#4FA352"
                text="Delete"
                margin="8px"
                onClick={onComfirm}
              />
              <Button textBg="red" text="Close" onClick={onClick} />
            </div>
          )}

          {/* footer */}
        </div>
      </div>
    </StyledDialog>
  );
};

export default Dialog;
