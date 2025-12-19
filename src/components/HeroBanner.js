import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

const HeroBanner = ({ title, subtitle, badge, children, isDark }) => {
  const gradient = isDark
    ? ['#0f1f39', '#0a1631', '#081126']
    : ['#eef2ff', '#eaf0ff', '#e2e8ff'];
  const titleColor = isDark ? colors.white : colors.neutral[900];
  const subtitleColor = isDark ? 'rgba(255,255,255,0.85)' : colors.neutral[600];
  const badgeColor = isDark ? 'rgba(255,255,255,0.12)' : '#e6edff';
  const badgeTextColor = isDark ? colors.white : colors.neutral[800];

  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.hero}
    >
      <View style={styles.content}>
        <View style={styles.textBlock}>
          {badge ? (
            <View style={[styles.badge, { backgroundColor: badgeColor }]}>
              <Ionicons name={badge.icon || 'business'} size={14} color={badgeTextColor} />
              <Text style={[styles.badgeText, { color: badgeTextColor }]}>{badge.label}</Text>
            </View>
          ) : null}
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          {subtitle ? <Text style={[styles.subtitle, { color: subtitleColor }]}>{subtitle}</Text> : null}
        </View>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  hero: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBlock: {
    flex: 1,
    gap: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeText: {
    fontWeight: '600',
    fontSize: 13,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default HeroBanner;
