'use client';
import { Tabs } from 'antd';
import {
  useParams,
  useRouter,
  useSelectedLayoutSegment,
} from 'next/navigation';
//Icons import
import { LuInfo, LuSettings } from 'react-icons/lu';
import { RxActivityLog } from 'react-icons/rx';

export default function EmployeesInfoTabs() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  return (
    <>
      <Tabs
        activeKey={segment || ''}
        onChange={(key) => router.push(`/employees/${id}/${key}`)}
        items={[
          {
            key: '',
            tabKey: '',
            label: 'Information',
            icon: <LuInfo className='inline' />,
          },
          {
            key: 'settings',
            tabKey: 'Settings',
            label: 'Settings',
            icon: <LuSettings className='inline' />,
          },
          {
            key: 'logs',
            tabKey: 'logs',
            label: 'Activity Log',
            icon: <RxActivityLog className='inline' />,
          },
        ]}
        centered
      />
    </>
  );
}
