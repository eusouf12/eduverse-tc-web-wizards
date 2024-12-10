'use client';
import { Drawer } from '@mui/material';
import { Button } from 'antd';
import React from 'react';
import { LuMenu } from 'react-icons/lu';
import AppDrawer from './drawer/drawer.component';
import { useSelectedLayoutSegments } from 'next/navigation';

const ResponsiveDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen((o) => !o);

  // On segments change, close the drawer
  const [prevSegment, setPrevSegment] = React.useState(''); // Store the previous segment
  const segments = useSelectedLayoutSegments();
  React.useEffect(() => {
    if (segments.join('--') === prevSegment && open) return; // No change
    setOpen(false); // Close the drawer
    setPrevSegment(segments.join('--')); // Update the prev segment
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segments]);

  return (
    <>
      <Button
        type='dashed'
        icon={<LuMenu />}
        className='fixed right-8 top-5 z-50 inline-flex shadow lg:hidden'
        onClick={onClose}
      />
      <Drawer
        anchor={'bottom'}
        open={open}
        onClose={onClose}
        className='lg:hidden'
        PaperProps={{
          className: 'flex-col-reverse p-4 flex-col',
        }}
      >
        <AppDrawer onClose={onClose} />
      </Drawer>
    </>
  );
};

export default ResponsiveDrawer;
