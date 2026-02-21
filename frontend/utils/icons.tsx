import React from 'react';
import { Terminal, Settings, Zap, Key, Cpu, Globe, Shield, Command, Monitor, CloudDownload, Play, LayoutGrid, Box, Search, ArrowRight, Check, Copy, ChevronDown, Calendar, Clock } from 'lucide-react';

export const getIcon = (name: string, props: any = { size: 24 }) => {
    switch (name) {
        case 'windows': return <Monitor {...props} />;
        case 'office': return <LayoutGrid {...props} />;
        case 'remote': return <Command {...props} />;
        case 'key': return <Key {...props} />;
        case 'cpu': return <Cpu {...props} />;
        case 'shield': return <Shield {...props} />;
        case 'zap': return <Zap {...props} />;
        case 'globe': return <Globe {...props} />;
        case 'code': return <Terminal {...props} />;
        case 'settings': return <Settings {...props} />;
        case 'hard-drive': return <Box {...props} />;
        case 'download': return <CloudDownload {...props} />;
        case 'play': return <Play {...props} />;
        case 'terminal': return <Terminal {...props} />;
        default: return <Terminal {...props} />;
    }
};
