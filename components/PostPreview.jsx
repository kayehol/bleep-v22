import Image from 'next/image';
import placeholder from '../public/placeholder.png';
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #101010;
    padding: 1em;
    a:hover {
        text-decoration: underline;
    }
    #metadata {
        margin-left: 2em
    }
`

const PostPreview = ({titulo, data, tags, slug}) => {
    return(
        <Style>
            <Image 
                src={placeholder} 
                alt="Imagem"
                height="128px"
                width="128px"
            />
            <div id='metadata'>
                <a href={slug}>
                    <h1>{titulo}</h1>
                    <h4>{data}</h4>
                </a>
                <p>{tags}</p>
            </div>
        </Style>
    )
}
export default PostPreview;