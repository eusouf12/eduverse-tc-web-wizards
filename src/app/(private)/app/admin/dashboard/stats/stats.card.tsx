'use client';
import { cn } from '@/lib/utils';
import { Card, Col, Statistic } from 'antd';
import { StatisticProps } from 'antd/es/statistic';

interface StatsCardProps {
  className?: string;
}

export default function StatsCard({
  className,
  ...StatisticArgs
}: StatsCardProps & StatisticProps) {
  return (
    <Col span={24} md={12} lg={6}>
      <Card bordered className={cn('h-full', className)}>
        <Statistic {...StatisticArgs} />
      </Card>
    </Col>
  );
}
