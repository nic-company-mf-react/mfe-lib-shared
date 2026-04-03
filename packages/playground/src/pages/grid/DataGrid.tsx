import { useMemo, useState, type ReactNode } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

interface Employee {
	name: string;
	position: string;
	team: string;
	joinDate: string;
	salary: number;
	status: 'Active' | 'Inactive';
}

const rowData: Employee[] = [
	{ name: '김민준', position: 'Frontend Developer', team: 'Web', joinDate: '2021-03-15', salary: 5200000, status: 'Active' },
	{ name: '이서연', position: 'Backend Developer', team: 'API', joinDate: '2020-07-01', salary: 5500000, status: 'Active' },
	{ name: '박지호', position: 'UX Designer', team: 'Design', joinDate: '2022-01-10', salary: 4800000, status: 'Active' },
	{ name: '최수아', position: 'DevOps Engineer', team: 'Infra', joinDate: '2019-11-20', salary: 6000000, status: 'Active' },
	{ name: '정도윤', position: 'Product Manager', team: 'Product', joinDate: '2021-09-05', salary: 6500000, status: 'Active' },
	{ name: '강하은', position: 'Data Engineer', team: 'Data', joinDate: '2023-02-28', salary: 5800000, status: 'Active' },
	{ name: '윤서준', position: 'QA Engineer', team: 'QA', joinDate: '2022-06-14', salary: 4500000, status: 'Inactive' },
	{ name: '임지우', position: 'Frontend Developer', team: 'Web', joinDate: '2023-08-01', salary: 4700000, status: 'Active' },
	{ name: '한소율', position: 'Backend Developer', team: 'API', joinDate: '2020-03-22', salary: 5300000, status: 'Active' },
	{ name: '오예진', position: 'Data Analyst', team: 'Data', joinDate: '2021-12-07', salary: 5100000, status: 'Inactive' },
	{ name: '신건우', position: 'Security Engineer', team: 'Infra', joinDate: '2022-09-19', salary: 5900000, status: 'Active' },
	{ name: '배나연', position: 'UI Designer', team: 'Design', joinDate: '2023-04-11', salary: 4600000, status: 'Active' },
];

const statusCellRenderer = (params: { value: string }) => {
	const isActive = params.value === 'Active';
	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
				isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
			}`}
		>
			{params.value}
		</span>
	);
};

const salaryCellRenderer = (params: { value: number }) => {
	return <span>{params.value.toLocaleString('ko-KR')} 원</span>;
};

export default function DataGridPage(): ReactNode {
	const [quickFilter, setQuickFilter] = useState('');

	const colDefs = useMemo<ColDef<Employee>[]>(
		() => [
			{ field: 'name', headerName: '이름', width: 120, filter: true },
			{ field: 'position', headerName: '직책', flex: 1, filter: true },
			{ field: 'team', headerName: '팀', width: 110, filter: true },
			{ field: 'joinDate', headerName: '입사일', width: 120, filter: true, sort: 'asc' },
			{
				field: 'salary',
				headerName: '연봉',
				width: 160,
				filter: 'agNumberColumnFilter',
				cellRenderer: salaryCellRenderer,
			},
			{
				field: 'status',
				headerName: '상태',
				width: 100,
				filter: true,
				cellRenderer: statusCellRenderer,
			},
		],
		[],
	);

	const defaultColDef = useMemo<ColDef>(
		() => ({
			sortable: true,
			resizable: true,
			filter: true,
		}),
		[],
	);

	const onGridReady = (params: GridReadyEvent) => {
		params.api.sizeColumnsToFit();
	};

	return (
		<div className="space-y-6 max-w-5xl">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Data Grid</h1>
				<p className="text-sm text-muted-foreground mt-1">
					<code className="bg-muted px-1 rounded text-xs">ag-grid-community</code> 를 사용한 데이터 그리드 예제입니다.
					정렬, 필터, 페이지네이션, 컬럼 리사이즈를 지원합니다.
				</p>
			</div>

			<div className="flex items-center gap-3">
				<input
					type="text"
					placeholder="전체 검색..."
					value={quickFilter}
					onChange={(e) => setQuickFilter(e.target.value)}
					className="border rounded-md px-3 py-1.5 text-sm w-60 bg-background focus:outline-none focus:ring-1 focus:ring-ring"
				/>
				<span className="text-xs text-muted-foreground">총 {rowData.length}명</span>
			</div>

			<div
				className="ag-theme-quartz rounded-lg overflow-hidden border"
				style={{ height: 460 }}
			>
				<AgGridReact
					rowData={rowData}
					columnDefs={colDefs}
					defaultColDef={defaultColDef}
					pagination={true}
					paginationPageSize={8}
					paginationPageSizeSelector={[8, 20, 50]}
					quickFilterText={quickFilter}
					onGridReady={onGridReady}
					animateRows={true}
				/>
			</div>

			<div className="rounded-lg border p-4 bg-muted/40 text-sm space-y-1">
				<p className="font-medium text-muted-foreground">기능 안내</p>
				<ul className="text-xs text-muted-foreground list-disc list-inside space-y-0.5">
					<li>컬럼 헤더 클릭 — 오름차순 / 내림차순 정렬</li>
					<li>컬럼 헤더 우측 아이콘 클릭 — 컬럼별 필터</li>
					<li>상단 검색창 — 전체 텍스트 빠른 검색</li>
					<li>컬럼 경계선 드래그 — 컬럼 너비 조절</li>
					<li>하단 페이지네이션 — 페이지 이동 및 페이지 크기 변경</li>
				</ul>
			</div>
		</div>
	);
}
