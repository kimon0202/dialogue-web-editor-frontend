import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background: #fefefe;
  color: #000;
`;

export const DeleteIcon = styled(Delete)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.text};

  cursor: pointer;
  margin-left: 4px;
`;

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.text};

  cursor: pointer;
  margin-left: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  background: ${(props) => props.theme.colors.primary};
  padding: 4px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  display: inline-flex;
  flex-direction: row;

  cursor: move;
`;

export const Title = styled.h5`
  width: 60%;
  height: 100%;
  margin: 0;

  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text};
`;

export const Body = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 4px;
  color: #000;
  font-size: 12px;
  font-weight: 500;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
