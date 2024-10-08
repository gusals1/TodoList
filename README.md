# TodoList Application

## 프로젝트 설명
사용자가 할 일을 추가하고, 완료 여부를 체크하며, 전체, 미완료, 완료 항목을 탭을 통해 필터링할 수 있는 TodoList 애플리케이션입니다. 각 항목에 대해 체크 상태를 변경하거나 삭제할 수 있습니다.

## 사용 기술
- **React**: 컴포넌트 기반 UI 라이브러리
- **Ant Design (antd)**: UI 구성 요소 라이브러리
- **Recoil**: 상태 관리 라이브러리

## 주요 기능
- 할 일 추가 및 삭제
- 체크박스를 통한 상태 변경
- 전체, 미완료, 완료 항목을 탭을 통해 필터링

## 컴포넌트 구조
### 1. TodoList 페이지
**설명**: 메인 페이지로, 전체 합쳐진 컴포넌트를 렌더링하여 기능을 제공합니다.

**경로**: `src/pages/todolist/index.tsx`

### 2. AddTodo
**설명**: 사용자가 새로운 할 일을 추가할 수 있는 컴포넌트입니다.

**경로**: `src/components/addTodo/AddTodo.tsx`

### 3. ListTodo
**설명**: 할 일 목록을 탭을 통해 구분하여 보여주는 컴포넌트입니다.

**경로**: `src/components/listTodo/ListTodo.tsx`

## 상태 관리
**상태 관리**: Recoil을 사용하여 글로벌 상태를 관리합니다. 이를 통해 **AddTodo**와 **ListTodo** 컴포넌트 간의 상태를 일관되게 유지할 수 있습니다.

## 주요 컴포넌트 및 훅 설명

### 1. addTodo 컴포넌트
**설명**: 사용자가 새로운 할 일을 추가할 수 있는 폼을 제공하는 컴포넌트입니다. 입력 필드와 제출 버튼이 포함되어 있으며, 사용자가 입력한 내용을 상태에 추가합니다.

**사용 이유**: 이 컴포넌트는 사용자 인터페이스의 핵심 부분으로, 새로운 할 일을 입력하고 추가하는 기능을 담당합니다. 직관적인 입력 방식으로 사용자가 쉽게 할 일을 추가할 수 있도록 합니다.

### 2. listTodo 컴포넌트
**설명**: 할 일 목록을 탭을 통해 구분하여 보여주는 컴포넌트입니다. 전체 목록, 미완료 목록, 완료 목록을 각각의 탭으로 구분하여 필터링할 수 있습니다.

**사용 이유**: 사용자가 할 일을 다양한 기준으로 필터링합니다. 전체, 미완료, 완료 항목을 탭으로 구분하여 필요한 정보를 쉽게 알 수 있습니다.

### 3. useTodoList 훅
**설명**: 할 일의 상태를 관리하는 커스텀 훅입니다. 할 일을 추가하고 삭제하며, 체크 상태 토글 기능을 제공합니다.

**사용 이유**: 상태 관리 로직을 컴포넌트에서 분리하여 재사용성을 높이고, 상태 변경 로직을 중앙 집중화하여 코드의 유지보수성을 향상시킵니다.

## 설치 및 실행
1. **프로젝트 클론**
    ```bash
    git clone https://github.com/gusals1/TodoList.git
    ```
2. **의존성 설치**
    ```bash
    cd todolist
    yarn install
    ```
3. **개발 서버 실행**
    ```bash
    yarn dev
    ```
4. **빌드 시**
    ```bash
    yarn build
    yarn start
    ```
