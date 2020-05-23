import { Delete, Edit } from '@material-ui/icons';
import { linearGradient } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    linearGradient({
      colorStops: [`${props.theme.colors.sidebar} 5%`, `#1c1c2f 80%`],
      toDirection: 'to top right',
      fallback: '#fff',
    })};
  border: 1px solid ${(props) => props.theme.colors.text};

  border-radius: 20px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;

  color: ${(props) => props.theme.colors.textSecondary};
`;

export const DeleteIcon = styled(Delete)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.textSecondary};

  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.textSecondary};

  cursor: pointer;
`;
