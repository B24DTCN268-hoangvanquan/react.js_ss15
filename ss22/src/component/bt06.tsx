
import { Spin } from 'antd';


const SpinnerGroup = () => {
  const spinnerColors = ['#3b82f6', '#6b7280', '#22c55e'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', padding: '32px' }}>
      {spinnerColors.map((color, index) => (
        <Spin
          key={index}
          size="large"
          indicator={
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              style={{
                animation: 'spin 1s linear infinite',
              }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke={color}
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="90"
                strokeDashoffset="60"
              />
            </svg>
          }
        />
      ))}
    </div>
  );
};

export default SpinnerGroup;