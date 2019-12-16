import styled from 'styled-components'
//By using styled components we are addig css in the component file by using simple syntax of
//styled components 
export const ButtonConatiner = styled.button`
text-transform: capitalize;
background: transparent;
color: var(--mainwhite);
border: 0.07em solid var(--mainwhite);
transition:all 0.5s ease-in-out; 
&:hover{
background:var(--mainDark);
}
&:focus{
    outline: none;
}
;  `

export const NavWrapper = styled.nav`
color: var(--mainDark);
`;
