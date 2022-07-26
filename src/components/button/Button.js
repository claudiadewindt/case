import Link from "next/link";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  children,
  className,
  href,
  type,
  onClick,
  disabled,
  ...props
}) => {
  const classes = classNames(styles.button_default, className);

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
