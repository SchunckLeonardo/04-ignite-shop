import { styled } from ".";

export const HeaderWrapper = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
});

export const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  alignItems: "center",
  padding: "0.75rem",
  borderRadius: 6,
  color: "$gray300",
  background: "$gray800",
  cursor: "pointer",

  span: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-12px",
    right: "-12px",
    border: "3px solid $gray900",
    borderRadius: "50%",
    fontSize: "0.875rem",
    fontWeight: "700",
    boxSizing: "content-box",
    width: 24,
    height: 24,
    textAlign: "center",
    backgroundColor: "$green500",
    color: "$white",
  },

  "&:hover": {
    color: "$gray100",
  },
});

export const AsideCartPanel = styled("div", {
  position: "absolute",
  right: 0,
  top: 0,
  width: 480,
  minHeight: "100vh",
  backgroundColor: "$gray800",
  zIndex: 10,
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
  transform: "translateX(100%)",
  transition: "transform .5x ease-in-out",
  padding: "1.5rem",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    svg: {
      cursor: "pointer",
    },
  },

  '&[data-active="on"]': {
    transform: "translateX(0)",
  },

  '&[data-active="off"]': {
    transform: "translateX(100%)",
  },
});

export const CartItemsWrapper = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "2rem",
  width: "100%",

  h2: {
    fontSize: "$lg",
    color: "$gray100",
    fontWeight: 700,
  },
});

export const CartItems = styled("div", {
  display: "flex",
  gap: "1.25rem",

  figure: {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    width: 100,
    height: 100,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
      objectFit: 'cover'
    }
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    h5: {
      fontSize: '$md',
      color: '$gray300',
      fontWeight: 400,
      lineHeight: '160%'
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 700,
      lineHeight: '160%'
    },

    button: {
      background: 'none',
      border: 'none',
      fontSize: '$sm',
      fontWeight: 700,
      lineHeight: '160%',
      color: '$green500',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300'
      }
    }
  }
});

export const AsideCartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4375rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: '160%',

    h4: {
      fontSize: '$sm',
      color: '$gray300',
      fontWeight: 400
    },

    p: {
      fontSize: '$md',
      color: '$gray300',
      fontWeight: 400
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 700
    },

    b: {
      fontSize: '$lg',
      fontWeight: 700,
      color: '$gray100'
    }
  }
})

export const PurchaseItemsButton = styled('button', {
  padding: '1.25rem 2rem',
  borderRadius: 8,
  background: '$green500',
  border: 'none',
  fontSize: '$md',
  fontWeight: 700,
  color: '$white',
  lineHeight: '160%',
  cursor: 'pointer',
  transition: '.2s',

  '&:hover': {
    background: '$green300'
  }
})
