import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: "$xl",
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    textDecoration: 'none',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
});

export const ImageContainer = styled("div", {
  width: '100%',
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',
  marginBottom: '2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover'
  }
});
