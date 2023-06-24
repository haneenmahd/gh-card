import styled from 'styled-components';
import NextLink from 'next/link';
import colors from '@/theme/colors';

const Link = styled(NextLink)`
    color: ${colors.text.secondary};
    text-decoration: underline;
    cursor: pointer;

    @media (hover: hover) {
        :hover {
            color: ${colors.text.primary};
        }
    }
`;

export const ExternalLink = styled.a.attrs({
    rel: 'noreferrer noopener',
    target: '_blank'
})`
    text-decoration: underline;
    padding-left: 3px;
`;

export default Link;